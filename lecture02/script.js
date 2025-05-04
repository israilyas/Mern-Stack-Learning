// Nodejs Basics
// Introduction to nodejs 
// Installing nodejs and npm
// working with modules

// Core modules
// File system operations
// understanding http module

// ======= Node Js =======
// Its not a programming languge
// its not a technology
// its not framework
// its not library
// not software..

// It is "JS runtime environment

// old time ==>  JS se backend nhi ban sakta bcoz JS ke pass wo functionalities nahi hein jinse backend banta hae

// ryan dahl isne socha JS se backend banna chahiye
// google chrome ka v8 engine(core/chrome browser jahan pura JS ka code chalata hae) open source hae aur ryan dahl us code mein chhedkhani kr rha hae 
// kyun k chrome ka v8 engine bana hae c++ mein
// fir usney socha k humein tw js mein code krna hae

// JS code se wrapped hae V8 engine ka code
// hum js ka code likhengey ==> jo k warpper layer of JS receive kregi and wo code v8 engine ke c++ modules ke saath ek server create krega  

// v8 + JS wrapper ==> Nodejs
// Nodejs is a JS runtime environment 
// Jab tak node chalega tab tak backend ban sakta hae / JS se server create kr saktey hein

// HTTP / HTTPS

// ==== Protocols- rules ====
// jinho ney nternet bnaya hae unho ney Internet pey kuch bh krney k lye rules bnaye hein , ab un rules ko follow krna zaruri hae ,  Aur ye rules follow hon islye ye rules ap k  operating system k software mein pre installed aatey hein . 

const http = require("http")

const server = http.createServer(function(req,res){
res.end("Hello Node Js Server")
})

server.listen(300)
