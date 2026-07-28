# 🔐 MERN Auth Pro

> A production-ready authentication system built with the MERN stack using JWT Authentication, Refresh Token Rotation, HttpOnly Cookies, and modern security best practices.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node](https://img.shields.io/badge/Node.js-22-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Live Demo

🌐 Frontend: **Coming Soon**

⚡ Backend API: **Coming Soon**

---

## 📸 Preview

### Login

<img width="1912" height="846" alt="image" src="https://github.com/user-attachments/assets/9bc9b1b5-f9ac-4adf-b870-fcdbe536ea72" />


---

# 🚀 Features

✅ Secure User Registration

✅ JWT Authentication

✅ Refresh Token Rotation

✅ HttpOnly Cookie Authentication

✅ Password Hashing using bcrypt

✅ Express Validator

✅ Protected Routes

✅ Persistent Login

✅ Automatic Access Token Refresh

✅ Session Logout

✅ Multi-device Refresh Tokens

✅ Helmet Security

✅ Rate Limiting

✅ Responsive Premium UI

---

# 🏗️ Tech Stack

## Frontend

- React
- Vite
- Axios
- React Router
- Context API
- Tailwind CSS

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Express Validator
- Helmet
- Morgan
- Compression
- Cookie Parser
- Express Rate Limit

---

# 📂 Folder Structure

```
MERN-AUTH
│
├── backend
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── validators
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── api.js
│   └── AuthContext.jsx
│
└── README.md
```

---

# 🔐 Authentication Flow

```
Signup/Login
      │
      ▼
Generate Access Token (15 min)

Generate Refresh Token (7 days)

Refresh Token stored in HttpOnly Cookie

Access Token stored only in memory

When Access Token expires

↓

Frontend calls /refresh

↓

Backend validates Refresh Token

↓

Issues new Access Token

↓

User stays logged in
```

---

# 🔒 Security Features

- Password Hashing (bcrypt)
- JWT Authentication
- Refresh Token Rotation
- HttpOnly Cookies
- Protected Routes
- CORS Protection
- Helmet
- Express Validator
- Rate Limiting
- Secure Cookie Configuration
- Token Revocation on Logout

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/mern-auth.git

cd mern-auth
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

Create `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

ACCESS_TOKEN_SECRET=YOUR_SECRET

REFRESH_TOKEN_SECRET=YOUR_SECRET

ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_EXPIRY=7d

CLIENT_URL=http://localhost:5173

NODE_ENV=development
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register User |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/refresh` | Refresh Access Token |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Get Logged User |

---

# 🧪 Future Improvements

- Email Verification
- Forgot Password
- Password Reset
- Google OAuth
- GitHub OAuth
- Two-Factor Authentication
- Redis Token Store
- Docker Support
- CI/CD Pipeline

---

# 👩‍💻 Author

**Meenu Pandey**

---

⭐ If you found this project useful, consider giving it a star.
