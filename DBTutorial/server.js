const express = require('express');
const UserModel = require('./userModel');

const app = express();

app.get('/' , (req, res) =>{
    res.send("Hello")
})

app.get('/create', async (req,res) => {
    const createdUser = await UserModel.create({
        name: "Abhishek",
        username: "Abhi",
        email: "abhishek@gmail.com"
    })

    res.send(createdUser);
})

app.listen(3000, () => {
    console.log("Server is working on 3000")
})