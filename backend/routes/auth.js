import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

import { requireAuth } from "../middleware/auth.js";
import asyncHandler from "../middleware/asyncHandler.js";

import {
  signupValidator,
  loginValidator,
} from "../validators/authValidator.js";

const router = express.Router();

const generateAccessToken = (userId) =>
  jwt.sign(
    { userId },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "15m",
    }
  );

const generateRefreshToken = (userId) =>
  jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d",
    }
  );

const refreshCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  path: "/api/auth",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

router.post(
  "/signup",
  signupValidator,
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const accessToken = generateAccessToken(user._id);

    const refreshToken = generateRefreshToken(user._id);

    user.refreshTokens.push({
      token: refreshToken,
    });

    await user.save();

    res.cookie(
      "refreshToken",
      refreshToken,
      refreshCookieOptions
    );

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  })
);

router.post(
  "/login",
  loginValidator,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const passwordMatched = await user.comparePassword(password);

    if (!passwordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const accessToken = generateAccessToken(user._id);

    const refreshToken = generateRefreshToken(user._id);

    user.refreshTokens.push({
      token: refreshToken,
    });

    await user.save();

    res.cookie(
      "refreshToken",
      refreshToken,
      refreshCookieOptions
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  })
);


router.post(
  "/refresh",
  asyncHandler(async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token missing",
      });
    }

    let decodedToken;

    try {
      decodedToken = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
    } catch {
      return res.status(403).json({
        success: false,
        message: "Invalid or expired refresh token",
      });
    }

    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const storedToken = user.refreshTokens.find(
      (rt) => rt.token === refreshToken
    );

    if (!storedToken) {
      return res.status(403).json({
        success: false,
        message: "Refresh token revoked",
      });
    }

    // Remove old refresh token (Rotation)
    user.refreshTokens = user.refreshTokens.filter(
      (rt) => rt.token !== refreshToken
    );

    const newAccessToken = generateAccessToken(user._id);

    const newRefreshToken = generateRefreshToken(user._id);

    user.refreshTokens.push({
      token: newRefreshToken,
    });

    await user.save();

    res.cookie(
      "refreshToken",
      newRefreshToken,
      refreshCookieOptions
    );

    res.status(200).json({
      success: true,
      message: "Access token refreshed",
      accessToken: newAccessToken,
    });
  })
);

router.post(
  "/logout",
  asyncHandler(async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
      try {
        const decodedToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET
        );

        const user = await User.findById(decodedToken.userId);

        if (user) {
          user.refreshTokens = user.refreshTokens.filter(
            (rt) => rt.token !== refreshToken
          );

          await user.save();
        }
      } catch {
        // Token already expired or invalid.
        // We still clear the cookie below.
      }
    }

    res.clearCookie("refreshToken", {
      ...refreshCookieOptions,
      maxAge: undefined,
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  })
);

router.get(
  "/me",
  requireAuth,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.userId).select(
      "-password -refreshTokens"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User profile fetched successfully",
      user,
    });
  })
);

export default router;