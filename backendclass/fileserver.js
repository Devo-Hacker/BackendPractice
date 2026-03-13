//read the content and display it on the server
// const fs = require('fs');
// const http = require('http');

// http.createServer((req, res) => {
//     fs.readFile('1.txt', 'utf-8', (err, data) => {
//         if(err) {
//             res.end("err");
//     }
//     else{
//         res.end(data);
//     }
//     }).listen(3000, () => {
//         console.log("open browser to check output")
//     })
// });

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('1.txt', 'utf-8', (err, data) => {
        if (err) {
            res.end("err");
        } else {
            res.end(data);
        }
    });
}).listen(3000, () => {
    console.log("open browser to check output");
});

