import { body, validationResult } from "express-validator";

export const signupValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid email required"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/)
    .withMessage("Must contain one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Must contain one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Must contain one number"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export const loginValidator = [
  body("email")
    .isEmail()
    .normalizeEmail(),

  body("password")
    .notEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];