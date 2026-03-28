//cookies parser
// const express = require('express')
// const app = express()

// const myLogger = (req,res,next)=>{
//     console.log("before login")
//     console.log("after login")
//     next()
// }
// app.use(myLogger)

// app.get('/',(req,res)=>{
//     console.log("welcome")
//     res.send("welcome")
// })
// app.listen(3000)




// import express from "express";
// import cookieParser from "cookie-parser";

// const app = express();
// app.use(cookieParser());
// app.get("/",(req,res)=>{
//     res.cookie("name","Rahul");
//     res.send("Cookie set!");
// });
// app.listen(8080,()=>{
//     console.log("Server running on port 8080");
// });

// import express from "express";
// import session from "express-session";
// import cookieParser from "cookie-parser";

// const app = express();

// app.use(cookieParser());

// app.use(
//   session({
//     secret: "my-secret-key",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.get("/", (req, res) => {
//   res.send(`
//         <h2>Cookie & Session Demo </h2>
//         <a href="/set-cookie">Set Cookie</a><br>
//         <a href="/get-cookie">Get Cookie</a><br><br>
//         <a href="/set-session">Set Session</a><br>
//         <a href="/get-session">Get Session</a>
//     `);
// });

// // COOKIE
// app.get("/set-cookie", (req, res) => {
//   res.cookie("username", "Rohit");
//   res.send("Cookie set!");
// });

// app.get("/get-cookie", (req, res) => {
//   const user = req.cookies.username;

//   if (user) {
//     res.send(`Cookie found: ${user}`);
//   } else {
//     res.send("No cookie found.");
//   }
// });

// // SESSION
// app.get("/set-session", (req, res) => {
//   req.session.user = "Rohit";
//   res.send("Session set!");
// });

// app.get("/get-session", (req, res) => {
//   if (req.session.user) {
//     res.send(`Session found: ${req.session.user}`);
//   } else {
//     res.send("No session found.");
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

import express from "express";
const app = express();
// Middleware using app.use()
// app.use((req, res, next) => {
//   console.log(`Request Method: ${req.method}`);
//   console.log(`Request URL: ${req.url}`);
//   next(); // move to next step
// });
// // Route
// app.get("/", (req, res) => {
//   res.send("Hello World ");
// });
// app.get tells you server what to do, when someone visit a specific url using a get response 
// app.all(path, (req, res, next) => {
//   // runs for all request methods
// });

// Home route
app.get("/", (req, res) => {
  res.send("Home page working ");
});

// app.all route
app.all("/test", (req, res) => {
  res.send(`You made a ${req.method} request to /test`);
});

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

