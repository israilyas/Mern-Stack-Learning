- initialize a project with npm
- install express

`npm init -y` // basic packa.json file
`npm i express`


## Setting up parsers for form

```js
app.use(express.json());
app.use(express.urlencoded({extended:true}));
```

## Setting up Ejs For EJS pages

- EJS stands for Embedded JavaScript Templating

- EJS ==> Frontend jo dikhae dega
- EJS html jesa dikhta hae lekin uskeyy undar hum dynamic stuff likh saktey hein , calculations perform kr saktey

### install EJS from npm

` npm i ejs`

### Setup EJS as a view engine
- it means backend ejs pages render(view) krega
```js
app.set('view engine','ejs');
```
- Dynamic Stuff n EJS
` <%= 22*2 %>`

## Setting up public static files
- css, images, vanilla JS
- `__dirname` => current folder

## Dynamic Routing
- sab sey pehley browser par jao
- url likhein jo apko chahiye
- ab us url route ko create kriye
- res bhejiye kuch bhi
- ab usi url koe agar dynamic bnana hae tw realise kro konsa part dynamic hae aur us part ke aage route mein ':' colon lagado

```js
app.get('/profile/:username',(req,res)=>{
    res.send(`Hello how are you?`)
})
```

#### Value of username/dynamic
`req.params` => aesa kuch bhi jis k aagey colon hae
`req.params.username` => handle username


## How To get Data Comming from Frontend At Backend Route
