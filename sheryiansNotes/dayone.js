//form handling and working with forms 
//handle backend process of forms making sure the data coming from any frontend  library, framework, template engine
//we still handle at the backend

//session cookie - we we need them
//suppose you have login insta to like a photo you have to login again in order to like another photo because just after
//you login insta basically forget us and its kinda frustrating so here cookie parser come's to the picture
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));l
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
 app.get("/", (req,res)=>{
    res.render("index");
 })
app.get("profile/:username", (req,res)=>{
    
    res.send(`welcome, ${req.params.username}`); //:is used for dynamic routing
 });
app.listen(3000, ()=>{
    console.log("its running");
})