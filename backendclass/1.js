//append new data
const fs = require('fs');
const filepath = "1.txt";
const newData = "This is the append file.\n";

//append data to the file
fs.appendFile(filepath, newData, "utf-8", (err) => {
    if(err) {
        console.error("Error appending to file:", err);
        return;
    }
    console.log("Successfully appended data to file.");
});