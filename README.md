
# 📝 Todo List API

A full-featured **RESTful API** built using **Node.js**, **Express**, and **MongoDB** with **JWT-based authentication**, email integration, and comprehensive testing using **Jest** and **Supertest**.

This project demonstrates best practices in **backend architecture**, **modular design**, and **test-driven development (TDD)**. It serves as a production-quality boilerplate for building scalable and secure APIs.

---

## 🚀 Features

- 🔐 **User Authentication**  
  Secure login with JSON Web Tokens (JWT)

- 🗂️ **Todo Lists & Items**  
  CRUD operations for managing user-specific todo lists and their items

- 📬 **Email Notifications**  
  Email support using Nodemailer

- 🔎 **Database Seeding**  
  Easily populate MongoDB with sample data for development and testing

- 🧪 **Integration Testing**  
  Test coverage using Jest & Supertest for API reliability

- 🧰 **Modern JavaScript (ES6+)**  
  Transpilation via Babel (`.babelrc` configured with presets)

---

## 🏗️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT
- **Testing:** Jest, Supertest
- **Emailing:** Nodemailer
- **Build Tools:** Babel

---

## 📁 Project Structure

```
project/
│
├── src/
│   ├── controllers/       # Business logic for users and todos
│   ├── models/            # Mongoose schemas for User and Todo entities
│   ├── routes/            # Express routes
│   ├── mail/              # Mail sending utility
│
├── tests/                 # Integration tests and database seeding
├── index.js               # Application entry point
├── .babelrc               # Babel configuration
├── package.json
└── README.md
```

---

## 🧪 How to Run Tests

```bash
npm install
npm test
```

Integration tests use a mock database setup to ensure data isolation and test reliability.

---

## 🛡 Security Highlights

- JWT middleware parses and verifies tokens for protected routes
- Input sanitation through `body-parser` middleware
- Secrets and tokens are managed securely

---

## 👤 Author

**Khaled Jamal**  
Senior Software Engineer | Backend Specialist | API Designer

> Passionate about writing clean, testable code and building meaningful applications.

---

## 📬 Contact

- LinkedIn: [https://www.linkedin.com/in/khaledjamal1](https://www.linkedin.com/in/khaledjamal1)
- Email: javaobjects@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
