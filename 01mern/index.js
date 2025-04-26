// Fundamentals of javaScript
// Arrays and objects
//Foreach, map, filter, find, indexOf

var arr = [1,2,3,4,2]

// For Each
arr.forEach(function(val){
console.log(val+" hello")
})

//Map ==> Array sey new array BNana hae
var newArr = arr.map((item)=>{
// console.log(item+)
return item*3;
})

console.log("new Array:",newArr)
console.log(arr)


// Filter => Jab bhi array sey new array bnana ho aur wo new array chota hosakta hae ya uskey braber ho sakta hae

//Kuch ko rkho kuch ko hatao

let ans =  arr.filter((item)=>{

    if (item > 3) {
        return true
    } else {
        return false;
    }
})

console.log("This is ANS array", ans)

let filterArr =  arr.filter((item)=>{
    return item >1;
})


console.log("filter Array: ",filterArr)

//Find 

let ans2 = arr.find((val)=>{
    if (val == 2) {
        return val
    } 
})

console.log(ans2)

let ans3 = arr.indexOf(2)
console.log(ans3)

//======================

// ======= Objects ========
// key value pair in curly braces

var obj = {
    name:"isra",
    age:20,
    key:"value"
}

Object.freeze(obj) // now values will not update

obj.name ="isra ilyas"

console.log(obj.name)
console.log(obj.age)
console.log(obj[name])

//==============================

// Functions
// functions are basically objects in javascript but its type of is "function"
//Function id object thats why it  contains  the property length

function abcd(a,b,c){
    return  "abcd" 
    //return to line 90fromwhere function is called
}

console.log("length of function:",abcd.length)
console.log(typeof(abcd))


let ans4 = abcd();
console.log(ans4)

//=============================

//Async JS Coding
//Synchronous => line by line code chaley
// jo bhi coe async nature ka ho usko side stackmein bhejdoand agle code  ko chalao jo bhi sync nature ka ho,  jab bhi sara sync code chal jaye,tab check kro async code complete huwa ya nhi ,agar wo complete huwa ho tw usey main stack mein lao aur chala do
// await ko use krney k lye necessity kia hae?

//fetch is async by nature ==>non blocking => code ko nhi rokega
//blob => stream =>not in readable formate

async function abcde(params) {
    await fetch("https://randomuser.me/api/")
}


let blob = await fetch(`https://randomuser.me/api/`)
let res = await blob.json

console.log(res)