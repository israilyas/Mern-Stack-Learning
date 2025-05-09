const express = require('express')
const app = express()
const port = 3000

//  Middleware
app.use(express.json()) //json based data ko readable krti ye line
app.use(express.urlencoded({extended:true}))
// x-www-form-urlencoded

// Route
app.get('/',(req,res)=>{
    res.send("Hello World")
})

// Server
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})