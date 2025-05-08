
# 📘 Express.js Beginner Guide

This guide explains the basic concepts of Express.js in simple terms. It's perfect if you're just starting backend development using Node.js and Express.js.

---

## 🚀 1. What is Express.js?

**Express.js** is a framework for building web applications in **Node.js**.

You can install it using **npm** (Node Package Manager):  
👉 `npm install express`

---

### 🔧 What is a Framework?

A **framework** gives you a pre-defined structure and flow to build applications.

You need to follow its rules and patterns, but you can still write your own custom logic.

**Example:**

- **Angular** is also a framework (for frontend).
- **React** is a **library** (more flexible, less structure).

**Express.js handles:**

- Receiving the request from the user  
- Processing it  
- Sending a response back  

---

## 🛠️ 2. Setting Up a Basic Express App

Create a file like `index.js` and add this code:

```js
const express = require('express')
const app = express()
```

## 📍 3. Creating Routes
A route defines how your server will respond to different URLs.

``` js
app.get('/', (req, res) => {
  res.send("Champion mera Anuj")
})
app.get() → for handling GET requests
```

'/' → this is the home page

(req, res) → req means request, res means response

res.send() → sends a response to the client

#### Another route:

```js
app.get('/profile', (req, res, next) => {
  return next(new Error("Something went wrong"))
})
```
This route sends an error to be handled by our error handler.

## ⚙️ 4. Middleware in Express

#### What is Middleware?
Middleware is any function that runs between receiving a request and sending a response.

#### Example use cases:

Logging

Authentication

Error handling

Modifying request data

Usage Example:
```js
app.use((req, res, next) => {
  console.log("A request was received")
  next() // Let it move to the next middleware or route
})
```

## ❌ 5. Error Handling
Express has a special middleware for handling errors.
``` js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something went wrong, we don't know what")
})
```
This will catch any error that happens inside your routes and show a message instead of crashing the server.

## ▶️ 6. Running the Server
```js
app.listen(3000)
```
This runs the server on port 3000. Open your browser and go to:
👉 http://localhost:3000

## 🔁 Optional: Auto-Reload with Nodemon
Instead of restarting the server every time you change something, use Nodemon:
```js
npm install -g nodemon
nodemon index.js
```
It watches your files and restarts the server automatically on changes.

## 🔄 7. Request(frontend) → Backend → Response(frontend)

This is the basic flow:

1-  User sends a request (clicks a link, submits a form) => Frontend

2- Server (Express.js) processes it => Backend

3- Server sends a response back to the user => Frontend

## ✅ Summary

- Express.js helps you build servers quickly using Node.js

- You define routes for different URLs

- You can use middleware to handle tasks like logging, validation, etc.

- You handle errors cleanly with a special error-handling function

- Nodemon helps during development by auto-restarting the server

