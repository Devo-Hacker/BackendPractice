//built in middleware
//makes our task easier, we dont have to write code for every task, we can use built in middleware for that task
//we have to run static index.html file directly without sending to server using send file function
var exp = require('express');
var obj =new exp();
var path = require('path');//to connect the two folders, use path module
var filepath = path.join(__dirname, '/public');//to connect the two folders, use path module
obj.use(exp.static(filepath));//to connect the two folders, use path module
obj.use(exp.urlencoded({extended:true}));//to fetch the data from form we have to use urlencoded middleware
obj.post('/register',(req,res)=>
{
    var body1 = req.body;
    res.send(body1);
})
obj.listen(4000,()=>{
    console.log("server is running");
})