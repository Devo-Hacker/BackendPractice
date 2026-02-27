//router level middleware
//run middleware (security checks) pnly for the specific pages
var exp = require('express');
var obj = new exp();
var encoded = exp.urlencoded({extended:true});
var router = exp.Router();

var rou1 = (req,res,next)=>{
    console.log("run only for home page");
    next();
}
var rou2 = (req,res,next)=>{
    console.log("run only for dashboard page");
    next();
}

router.get('/profile', rou1, (req,res)=>{
    res.send("<h1>profile page</h1>");
})
router.get('/dashboard', rou2, (req,res)=>{
    res.send("<h1>dashboard page</h1>");
})
obj.use('/user', router);
obj.listen(4500,()=>{
    console.log("server is running");
})

//create a form with post method, create two middlewares, in the middle compare the role , if the role is admin then open dashboard page if role is user then open profile page input you have to take through form
var exp = require('express')