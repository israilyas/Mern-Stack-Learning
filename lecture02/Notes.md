# 📘 Node.js Basics

Welcome to Node.js! This guide is for beginners who want to understand what Node.js is and how it works.

---

## 🧠 What is Node.js?

- ❌ Not a programming language  
- ❌ Not a framework  
- ❌ Not a library  
- ❌ Not a software  
- ✅ It **is** a **JavaScript runtime environment**

This means Node.js allows you to run JavaScript code **outside the browser**, like on your computer/server — mainly used for backend development.

---

## 📜 Why Node.js?

In the past, JavaScript was only used for frontend (browser) and **couldn't create backend servers**.

Then came **Ryan Dahl** — he thought JavaScript should also be used for backend development.

- He worked with **Chrome's V8 engine**, which runs JavaScript inside the browser.
- V8 is written in **C++** and is **open-source**.
- He created a **wrapper** around V8 using JavaScript so we can write JS code that runs like a backend server.

👉 **V8 Engine + JS Wrapper = Node.js**

As long as **Node.js is running**, you can run a server using JavaScript!

---

## 💻 Installing Node.js & npm

- Download from: [https://nodejs.org](https://nodejs.org)
- It comes with **npm** (Node Package Manager) — used to manage packages/modules.

---

## 📦 Working with Modules

Modules help keep code clean and organized. There are two types:

### 1. Core Modules (built-in)
Examples:
- `fs` (File System): read/write files
- `http`: create web servers

### 2. External Modules
Installed using `npm` (like `express`, `mongoose`, etc.)

---

## 📁 Core Modules

### File System (`fs`)
- Read/write files
- Create/delete folders
- Async or sync options

### HTTP Module
- Create web servers
- Handle requests and responses

Example:
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
