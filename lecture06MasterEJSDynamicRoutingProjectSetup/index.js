const express = require('express');
const app = express();
const port = 3000
const path = require('path')
// console.log(path.join(__dirname,'public'))

// Parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))) // har request k lye static file yahan milengi 
app.set('view engine','ejs');

// Route
app.get("/",(req,res)=>{
    // res.send("Server chal rha hae")
    res.render('index')
})
// Dynamic Route
app.get('/profile/:username',(req,res)=>{
    // res.send(`Hello how are you?`)
    res.send(`Welcome, ${req.params.username}`)
})

app.get('/author/:username/:age',(req,res)=>{
    res.send(`Hello ${req.params.username} of age ${req.params.age}`)
})

// server
app.listen(port,()=>{
    console.log(`Started server on ${port}`)
})