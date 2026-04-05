import express from 'express';

const app = express();

const users={
    xyz: {role:"admin"},
    abc: {role:"teacher"},
    pqr: {role:"student"}
};

const permission ={
    admin: ["dashboard", "users", "profile"],
    teacher: ["dashboard"],
    student: ["profile"]
};

const getuser = (req,res,next) =>{
    const username = req.query.user;
    if(!username || users[username]){
        return req.send("user not found");
    }
    req.user = users[username];
    next();
}
app.use(getuser);

//rbac middleware
const checkAccess = (page) => (req,res,next) => {
    const role = req.user.role;
    if(permission[role].include(page)){
        next();
    }
    else{
        res.send("ACCESS DENIED");
    }
};

//ROUTE
app.get("/dashboard", checkAccess("dashboard"), (req,res)=>{
    res.send("welcome to the dashboard");
});
app.get("/users", checkAccess("users"), (req,res)=>{
    res.send("welcome to the users");
});
app.get("/profile", checkAccess("profile"), (req,res)=>{
    res.send("welcome to the profile");
});

app.listen(3000, ()=>{
    console.log("server started");
});