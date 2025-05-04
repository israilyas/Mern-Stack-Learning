// ====== FILE SYSTEM ========
// writefile
// appendfile
// copyfile
// rename
// unlink

const fs = require('fs');

// ==== Write File ======
// fs.writeFile("filename", "date", callback)

// fs.writeFile("hey.txt","hey hello kesey ho",(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })

// ======= Append File =======
// fs.writeFile("filename", "date", callback)
// fs.appendFile("hey.txt","  Mein tw acha hun..  Ap kesey hein?", (err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })

// ==== Rename =====

// fs.rename("hey.txt","hello.txt",(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })

// ===== CopyFile =====

// fs.copyFile("hello.txt","./copy/copy.txt",(err)=>{
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("Done")
//     }
// })

// ====== UnLink ==> Delete File =======
// fs.unlink("hello.txt",(err)=>{
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("Done")
//     }
// })

// RMDIR ==> Remove blank Folder

// fs.rmdir("./copy", {recursive:true},(err)=>{
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("Directory Deleted Successfully")
//     }
// })

fs.rmdir("./copy", {recursive:true},(err)=>{
    if (err) {
        console.log(err.message)
    } else {
        console.log("Directory Deleted Successfully")
    }
})
