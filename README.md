# 🔐 MERN Auth Pro

A production-ready authentication system built with the **MERN Stack** implementing **JWT Authentication**, **Access & Refresh Tokens**, **HttpOnly Cookies**, and modern backend security practices.

This project demonstrates a secure authentication workflow suitable for production-ready web applications while following clean architecture and REST API principles.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)

---

# 🌐 Live Demo

**Frontend**

https://mern-auth-pro.vercel.app

**Backend API**

https://mern-auth-pro-qjfj.onrender.com

---

# 📷 Screenshots

## Login

<img width="1912" height="846" alt="Screenshot 2026-07-28 173231" src="https://github.com/user-attachments/assets/f3bbec2c-e907-4d84-8343-bef56870318f" />


---

# ✨ Features

- Secure User Registration & Login
- JWT Authentication
- Access Token + Refresh Token Flow
- Refresh Token Rotation
- HttpOnly Cookie Authentication
- Password Hashing using bcrypt
- Protected Routes
- Automatic Session Refresh
- Express Validator
- Rate Limiting
- Helmet Security
- Responsive Modern UI
- MongoDB Atlas Integration

---

# 🏗️ Architecture Overview

<img width="1912" height="846" alt="Screenshot 2026-07-28 173231" src="https://github.com/user-attachments/assets/54cc03ac-a20f-439f-a17f-7b4a2b169395" />

```
React (Vite)
      │
 Axios API Calls
      │
Express.js REST API
      │
JWT Authentication
      │
MongoDB Atlas
```

### Authentication Flow

```
User Login / Signup
        │
        ▼
Generate Access Token (15 Minutes)

Generate Refresh Token (7 Days)

↓

Access Token returned to Frontend

↓

Refresh Token stored in HttpOnly Cookie

↓

Protected API Request

↓

Access Token Expires

↓

Frontend requests /auth/refresh

↓

Backend validates Refresh Token

↓

New Access Token Generated

↓

User stays logged in
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Axios
- React Router DOM
- Context API
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Express Validator
- Helmet
- Compression
- Morgan
- Cookie Parser
- Express Rate Limit

---

# 📂 Project Structure

```
mern-auth-pro/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔒 Security Features

- JWT Authentication
- Refresh Token Rotation
- HttpOnly Cookies
- Password Hashing (bcrypt)
- CORS Protection
- Helmet
- Express Validator
- Protected Routes
- Rate Limiting
- Secure Cookie Configuration
- Token Revocation on Logout

---

# 🚀 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Meenu-Pandey/mern-auth-pro.git

cd mern-auth-pro
```

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

# 📡 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register User |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/refresh` | Refresh Access Token |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Get Current User |

---

# 🤖 AI Tools Used

- ChatGPT (Architecture, debugging, deployment guidance)
- GitHub Copilot (Frontend component improvements)

---

# 🚀 Future Enhancements

- Email Verification
- Forgot Password
- Password Reset
- OAuth (Google / GitHub)
- Two-Factor Authentication
- Docker Support
- CI/CD Pipeline
- Redis-based Token Store

---

# 👩‍💻 Author

**Meenu Pandey**

- GitHub: https://github.com/Meenu-Pandey

- LinkedIn: https://linkedin.com/in/mpandey4
