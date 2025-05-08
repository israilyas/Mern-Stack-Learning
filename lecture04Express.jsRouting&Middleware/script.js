// Express.js Framework

//1-  Introduction to express js
// express.js aik npm package hae
// It is framework -> Framework apko flow deta hae aur ussi flow mein kaam krna padta (individuallity khud ki likh saktey)
// ANgular Framework
// React => library
// express.js manages everything from receiving the request and giving the response

// 2- Setting Up a basic express application

const express = require('express')
const app = express()

// 4 ========= Route Create =========
// app.get(route, request Handler)
// Request Handler is also a middleware

// Middleware
// app.use()

app.get('/',(req,res)=>{
    res.send("Champion mera ANuj")
})

app.get('/profile',(req,res,next)=>{
    // res.send("Champion uska coach okayyy oka now i am changing")
    return next(new Error("Something went wrong"))

})

// Error handler
app.use((err, req, res, next)=>{
console.error(err.stack)
res.status(500).send('Something went wrong we dont know what')
})

// RUN SERVER
app.listen(3000)

//  npm i nodemon -g ==> Not running server again and again

// ======== 5 MiddleWare ==========
//  Anything you want to perform before any route is done by middleware
// => jab bhi server request accept krta hae wahan sey route k beech pohonchney tak agar ap us request ko beech mein roktey ho aur kuch perform krtey ho tw ye element middleware kehlata hae

// ====== request and response handling =======
// Frontend - Backend - Frontend

// ======= Error handling ========
// express.js k pass aik special route aur wo hae hi error handling k lye hae