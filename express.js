// //import express module
// const express = require('express');
// const app = express()//creating object of the express
// const port = 3000 //port number

// app.use(express.urlencoded({extended:true})) //middleware
// app.get('/', (req,res)=>
// {
//     res.send(` <form action="/submit" method="post">
//          <input type="text" name="name"><br><br>
//         <button type="submit">Submit</button>
//         </form>`)
// })

// app.post('/submit', (req,res) =>
// {
//     const name= req.body.name;
//     res.send(`Name: ${name}`);
// })


// // app.get("/user/:name",(req,res)=>
// // {
// //     res.send("hello "+req.params.name)
// // })

// // //homepage
// // app.get('/', (req,res)=>
// // {
// //     res.send("<h2> Welcome to the homepage </h2>")
// // })
// // //aboutpage
// // app.get('/about', (req,res)=>
// // {
// //     res.send("<h2> Welcome to the aboutpage </h2>")
// // })
// // //contact
// // app.get('/contact', (req,res)=>
// // {
// //     res.send("<h2> Welcome to the contactpage </h2>")
// // })

// // //form to add two numbers
// // app.get('/', (req,res)=>
// // {
// //     res.send(`
// //         <form action="/add" method="get">
// //         <input type="text" name="num2"><br><br>
// //     <button type="submit">Submit</button>
// // </form>
// //         `)
// // })

// // //to handle the request
// // app.get('/add', (req,res) =>
// // {
// //     const n2 = req.query.num2;
// //     res.send(`<h2> Welcome back ${n2}`);
// // })

// //define the route for the GET request to the root URL
// // app.get('/', (req,res) =>
// // {
// //     res.send("hello this is express");
// // })

// //start the server
// app.listen(port, ()=>
// {
//     console.log("server is running");
// })

// var express = require('express');
// var app = express();
// var fs = require('fs');
// app.get('/home', (req, res)=>
// {
//     res.send("welcome to the homepage");
// })
// app.get('/', (req,res)=>
// {
//     var log = "request recieved on "+new Date();
//     fs.appendFileSync('log1.txt', log);
//     res.send(log);
// })


// var express = require('express');
// var app = new express();
// var encoded = express.urlencoded({extended:true});
// app.get('/login', (req, res)=>
// {
//     res.sendFile(__dirname+"/home.html");
// })
// app.post('/loginmethods', encoded, (req,res)=>
// {
//     const uploadfile = req.body.n1;
    
//     res.send(`Username: ${username} <br> Password: ${password}`);
// })

// app.listen(3000, ()=>
// {
//     console.log("server is running");
// })

//create a form which will take text files as input with post method fetch the file and duplicate it with name duplicate.txt and send copied successfully on server.
// var exp = require('express')
// var obj = exp()
// var fs = require('fs')
// var encoded=exp.urlencoded({extended:true})
// obj.get('/file',(req,res)=>{
//     res.sendFile(__dirname+'/filepost.html')
// })

// obj.post('/duplicate',encoded,(req,res)=>{
//     var filename = req.body.f1
//     fs.copyFileSync(filename,'duplicate.txt')
//     res.send("file copied successfully,check ur express folder")
// })
// obj.listen(3000,()=>{
//     console.log("server running")
// })

//create a form with post method with input field whose type is text, enter the role through form, fetch the details, use the fetched role and use middleware to authenticate the valid user only valid user will be allowed to open the website
var exp = require('express');
var obj = express();
var encoded = exp.urlencoded({extended:true});
