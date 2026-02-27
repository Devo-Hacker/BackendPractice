//127.0.0.1:3000/?name=niladree

var http = require('http');
var url = require('url');
http.createServer((req, res)=>
{
    const data = url.parse(req.url, true);
    console.log(data);
    var name=data.query.name;
    res.write(`the fetched name from url is ${name}`);

    var n1 = parseInt(data.query.n1);
    var n2= parseInt(data.query.n2);
    res.write(`the fetched url is ${n1 + n2}`);
    // res.write(`${data}`);
    res.end()
}).listen(3000, ()=>{
    console.log("server is running ");
})