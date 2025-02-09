const express = require('express');
const app = express();
const path = require('path')

//MiddleWares
app.use(express.json());  //middleware ye incoming HTTP request ke body ke data ko JS object mai convert karta hai
app.use(express.urlencoded({extended:true}))  //ye html form se jo data aata hai usse handle karne ke kaam aata hai 
app.use(express.static(path.join(__dirname,  'public')))   //ye static files(html, css, png, etc) ko path batata hai jo ki public folder mai hai


app.set("view engine", "ejs")

console.log(path.join(__dirname,  'public'));

app.get('/' , (req, res) => {
    res.render("index")
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id; // URL se param ko access karo
    res.send(`User ID: ${userId}`);
  });
  

app.listen(3000, () => {
    console.log("Server is working")
})