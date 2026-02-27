const fs = require('fs');
const file1 = "document.txt";
const file2 = "studentgrades.txt";
const combinedFile = "combined.txt";

fs.readFile(file1, "utf-8", (err, data1) => {
    if (err) {
        console.log("Error reading file1:", err);
        return;
    }
    fs.readFile(file2, "utf-8", (err, data2) => {
        if (err) {
            console.log("Error reading file2:", err);
            return;
        }
        fs.writeFile(combinedFile, data1 + data2, "utf-8", (err) => {
            if (err) {
                console.log("Error writing combined file:", err);
                return;
            }   
        })
        console.log("files are successfully combined into", combinedFile);
    });
});
//create a json file and print name and section in the server
const http = require('http');
const fs = require('fs');

const jsonData = {
    name: "Niladree",
    section: "A"
};

// Create file once, then start server
fs.writeFile("data.json", JSON.stringify(jsonData), "utf-8", (err) => {
    if (err) {
        console.log("error in the json file creation:", err);
        return;
    }

    console.log("json file is created successfully");

    http.createServer((req, res) => {
        fs.readFile('data.json', 'utf-8', (err, data) =>{
            if(err){
                res.end("error");
                return;
            }
            console.log("data from json file:", data);
            res.end(data);
        });
    }).listen(4000, () => {
        console.log("open browser to check json output");
    });
});
