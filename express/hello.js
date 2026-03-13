const express = require('express');
const app = express();

const myLogger = (req,res,next) =>{

    console.log("before login");
    next();
    console.log("after login");
    next();

}

app.use(myLogger);

app.get('/', (req,res)=>{
    console.log("welcome");
    res.send("welcome");
})

app.listen(3000);