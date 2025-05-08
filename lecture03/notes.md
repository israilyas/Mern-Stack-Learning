# 🌱 Easy Guide to npm and Node.js

## 1. What is npm?

- **npm** means **Node Package Manager**.
- It's used to add tools (called packages) to your project.
- These tools can be things like React, Angular, or anything else.
- Think of it like an app store, but for code.

📦 **Quick Note**:  
- Built-in tools in Node.js are called **modules**.  
- Tools you install using npm are called **packages**.

---

## 2. How to Install or Remove Packages

### ✅ To Install:
`npm install package-name`
or simply
`npm i package-name`


### ❌ To Uninstall:

`npm uninstall package-name`


### 📌 To Install a Specific Version:
`npm i package-name@version`


---

## 3. What is node_modules?

- It's a folder that stores all the packages you installed.
- You don’t need to touch or change anything inside it.
- npm makes it for you when you install packages.

---

## 4. Dependencies vs DevDependencies

- **Dependencies** = Needed to run your app (for users).
- **DevDependencies** = Only needed while coding or developing.

Example:
`npm i nodemon --save-dev`


---

## 5. npm Scripts

You can make shortcut commands inside your `package.json` file.
- `npm script` ==> for default scripts that are stored in operating sys while installing node
- ` npm run script-name` = > for custom script / script not saved in table

Example:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
