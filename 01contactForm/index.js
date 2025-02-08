
import express from 'express';
import path from 'path'

const app = express()

const users = [];

// using middleware
app.use(express.static(path.join(path.resolve() ,"public")))
app.use(express.urlencoded({extended:true}))

// console.log(express.static(path.join(path.resolve() ,"public")));

app.set("view engine" , "ejs")



app.get("/" , (req,res) => {
    res.render("index.ejs")
    // res.send("index.ejs")
})

app.get("/success" , (req,res) => {
    res.render("success")
    // res.send("index.ejs")
})

app.get("/users" , (req,res) => {
    res.json({
        users
    });
    // res.send("index.ejs")
})


app.post("/", (req, res) =>{
    // console.log(req.body)

    users.push({username: req.body.name , email: req.body.email});

    res.redirect("/success")
})

app.listen(5001, () => {
    console.log("Server is running")
})