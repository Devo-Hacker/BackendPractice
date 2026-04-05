// import express from 'express'
const express = require('express')
const app = express();

//add security header
app.use((req,res,next)=>{
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options','DENY');
    res.setHeader('X-XSS-Protection','1; mode=block');
    res.setHeader('strict-Transport-Security','max-age=3');
    next();
})
app.get('/',(req,res)=>{
    res.send("your site is now safe");
})
app.listen(3000);