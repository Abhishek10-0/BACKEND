// const http = require ("http");


// //  const server = http.createServer(() => {
// //     // console.log("server is working")
// // })


// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("<h2>Home Page</h2>");
//     } else if (req.url === "/about") {
//         res.end("About Page");
//     } else if (req.url === "/contact") {
//         res.end("<h1>Contact Page</h1>");
//     }
// })
// server.listen(5001,() => {
//     console.log("server is working in listen")
// })



import express from "express";


const app = express();

// app.get("/",  (req, res)=>{
// res.send("Heyyyy")
// })

// app.get("/", (req, res) => {
//     res.statusCode(404); 
// })

// app.get("/" , (req,res)  =>{
//     res.sendStatus(500);
// })

// app.get("/", (req, res) => {
//     res.render("index.ejs")
// })

app.get("/", (req, res) => {
    res.render("index.ejs", {name : "Abhishek"})
})

app.listen (5001, () => {
    console.log("Hello World")
})





// import express from 'express';
// import path from 'path'

// const app = express()

// app.use(express.static(path.join(path.resolve() ,"public")))

// // console.log(express.static(path.join(path.resolve() ,"public")));

// app.set("view engine" , "ejs")



// app.get("/" , (req,res) => {
//     res.render("index.ejs")
//     // res.send("index.ejs")
// })

// app.listen(5001, () => {
//     console.log("Server is running")
// })