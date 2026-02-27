//write student grade is O in a file and append new data
const fs = require('fs');
const filepath = "studentgrades.txt";
const gradeData = "Maximum grade: O.\n";

fs.writeFile(filepath, gradeData, "utf-8", (err)=>{
    if(err){
        console.log("Error writing to file:", err);
        return;
    }
    console.log("grade data written successfully");
})

const additionalData = "NEW GRADE: A+. \n";
fs.appendFile(filepath, additionalData, "utf-8", (err)=>{
    if(err){
        console.log("Error appending to file:", err);
        return;
    }
    console.log("Additional data appended successfully");
});

fs.readFile(filepath, "utf-8", (err, data)=>{
    if(err){
        console.log("Error reading file:", err);
        return;
    }
    console.log("File contents:", data);

    const updated = data.replace("Maximum grade: O.", "Maximum grade: A+.");
    fs.writeFile(filepath, updated, "utf-8", (err)=>{
        if(err){
            console.log("Error updating file:", err);
            return;
        }
        console.log("File updated successfully");
    });
});

//create a new file read data of that file, write new data and replace the data from that file

const fs = require('fs');
const newfilePath = "newfile.txt";
const data = "this is my new data";

fs.readFile(filePath, "utf-8", (err, content)=>{
    if(err){
        console.log("Error reading file:", err);
        return;
    }   
    console.log("File content:", content);

    const newData = content.replace("my", "the");

    fs.writeFile(newfilePath, newData, "utf-8", (err)=>{
        if(err){
            console.log("Error writing to new file:", err);
            return;
        }
        console.log("New file created and data written successfully");
    });
});