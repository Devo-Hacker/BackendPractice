// //compress and decompress files using zlib module
// const fs = require('fs');
// const zlib = require('zlib');

// //create read sttream
// const readstream = fs.createReadStream('test7.txt');

// //create write stream
// const writestream = fs.createWriteStream('test1.txt.gz');

// //create a gzip transform stream
// const gzip = zlib.createGzip();

// //pipe read>compress>write
// readstream.pipe(gzip).pipe(writestream);
// console.log("file is compressed successfully");


// //decompress the file
// const fs = require('fs');
// const zlib = require('zlib');

// //read the compressed file
// const readstream = fs.createReadStream('test1.txt.gz');

// //create a write stream for the decompressed file
// const writestream = fs.createWriteStream('test1.txt');

// const gunzip =zlib.createGunzip();

// //pipe read>decompress>write
// readstream.pipe(gunzip).pipe(writestream);
// console.log("file is decompressed successfully");

// //promise
// const getData = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Data received'), 2000);
// })
// getData.then(msg => console.log(msg));

// function getData()
// {
//     return new Promise(resolve => 
//     {setTimeout(() => resolve("Data received"), 1000);
//     });
// }
// async function fetchData()
// {
//     console.log("fetching data...");
//     const result = await getData();
//     console.log(result);
//     console.log("done");
// }
// fetchData();


// function fetchData()
// {
//     return new Promise((resolve, reject) => {
//         let success = true;
//         setTimeout(() => {
//             if(success)
//             {
//                 resolve("Data fetched successfully");
//             }
//             else
//             {
//                 reject("Error fetching data");
//             }
//         }, 1000);
// }
//     );
// }
// async function getData()
// {
//     try{
//         const data = await fetchData();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getData();


//example of a third party module
// const lodash = require('lodash');

// let arr = [1,2,3,4,5,2,5,2];
// console.log(lodash.uniq(arr));

//moment
// const moment = require('moment');
// console.log("current date and time: "+moment().format('MM DO YYYY, h:mm:ss a'))

//server
// const http = require('http');

// //creating a server
// const server = http.createServer((req, res) => 
// {
//     res.writeHead(200, {'content-type':'text/plain'})
//     res.end('Hello js')
// })

// //start the server
// server.listen(3000, ()=>
// {
//     console.log('Server is running');
// })

// const http= require('http');

// //create a server
// const server = http.createServer((req, res)=>
// {
//     res.write("hello this is Niladree");
//     res.end();
// })
// server.listen(3000);

// const http = require('http');
// http.createServer((req, res)=>
// {
//     function add(a,b){
//         return a+b;
//     }
//     res.end(`The sum is: ${add(7,7)}`);
// }).listen(3000, ()=>
// {
//     console.log("server is running")
// });

//create a function to show the result factorial of a number and get the result on the server
// const http = require('http');
// http.createServer((req, res)=>
// {
//     function factorial(n){
//         if(n<0) return "invalid user";
//         if(n===1 || n===0) return 1;
//         return n * factorial(n-1);
//     }
//     res.end(`The factorial is: ${factorial(3)}`);
// }).listen(3000, ()=>
// {
//     console.log("server is running")
// });


//write a code to display area of a room on the server
// const http = require('http');
// http.createServer((req, res)=>
// {
//     function area(a,b,c){
//         return a*b*c;
//     }
//     res.end(`The area of the room is: ${area(7,7,8)}`);
// }).listen(3000, ()=>
// {
//     console.log("server is running")
// });

//display json data on the server
// const http = require('http');
// const server = http.createServer((req, res) =>
// {
//     res.writeHead(200, {'content-type':'application/json'});
//     const data = {
//         name : "Niladree",
//         role : "backend specialist developer"
//     }
//     res.end(JSON.stringify(data));
// })
// server.listen(3000, ()=>
// {
//     console.log("server is running");
// })

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/home') {
        fs.readFile('home.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("error loading file");
            } else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(data);
            }
        });
    } 
    
    else if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("error loading file");
            } else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(data);
            }
        });
    } 
    
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("server is running");
});
































