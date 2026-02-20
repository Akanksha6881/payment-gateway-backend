# Payment Gateway Backend System

## Description
A backend system simulating a real-world payment gateway. It supports user authentication, payment creation, payment verification, and transaction tracking using REST APIs.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Postman (API Testing)

## Features
- User registration & login
- Secure payment creation
- Transaction status tracking
- API testing with Postman
- Error handling & validation

## APIs
- POST /api/auth/register
- POST /api/auth/login
- POST /api/payment/create
- POST /api/payment/verify
- GET /api/payment/all

## How to Run
```bash
npm install
npx nodemon app.js
