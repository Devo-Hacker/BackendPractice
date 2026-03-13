var http = require('http');
var fs= require('fs');
http.createServer((req, res)=>
{
    if(req.url=='/home'){
        res.write("welcome to the homepage");
        res.end();
    }

    else if(req.url=='/about'){
        res.write("mat kar lala mat kar");
        res.end();
    }

    else if(req.url=='/contact'){
        res.write("welcome to the contacts");
        res.end();
    }

    else{
        var log="request recieved on "+ new Date();
        res.write(log);
        fs.appendFile('log.txt', log, (err)=>
        {
            if(err){
                res.write(err);
                res.end();
            }
        });
        res.end();
    }
}).listen(3000, ()=>{console.log("server running")});