# MERN Authentication Backend

Secure authentication backend built with Node.js, Express.js, MongoDB and JWT.

## Features

- JWT Authentication
- Access Token & Refresh Token
- Refresh Token Rotation
- HttpOnly Cookies
- Password Hashing using bcrypt
- Express Validator
- Helmet Security
- Compression
- Rate Limiting
- CORS Protection
- Protected Routes
- Async Error Handling
- MongoDB with Mongoose

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Express Validator
- Helmet
- Morgan
- Compression
- Cookie Parser

---

## Folder Structure

backend/

├── middleware/

├── models/

├── routes/

├── validators/

├── app.js

├── server.js

└── package.json

---

## Installation

```bash
npm install
```

Create a `.env`

```env
PORT=5000

NODE_ENV=development

MONGO_URI=your_mongodb_connection

ACCESS_TOKEN_SECRET=your_secret

REFRESH_TOKEN_SECRET=your_secret

ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_EXPIRY=7d

CLIENT_URL=http://localhost:5173
```

Start server

```bash
npm run dev
```

---

## API Endpoints

### Authentication

POST

```
/api/auth/signup
```

POST

```
/api/auth/login
```

POST

```
/api/auth/logout
```

POST

```
/api/auth/refresh
```

GET

```
/api/auth/me
```

---

## Security

- Password Hashing
- JWT Authentication
- Refresh Token Rotation
- HttpOnly Cookies
- Rate Limiting
- Helmet
- CORS
- Protected Routes

---

## Author

Meenu Pandey