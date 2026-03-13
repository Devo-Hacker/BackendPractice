const fs = require('fs');
const filepath = "data.txt";
//writing down the content into the file
const newContent = "This is the new file.";
fs.writeFile(filepath, newContent, "utf-8", (err) => {
    if(err) {
        console.log("An error has occurred");
        return;
    }   
    console.log("File content written successfully");
});