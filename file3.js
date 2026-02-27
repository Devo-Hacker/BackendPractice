//import 
 import fs from 'fs';
// const filepath = 'output1.txt';
// const content = {
//     name: 'NodeJS',
//     type: 'JavaScript Runtime'
// }
// const content1 = JSON.stringify(content, null, 2);
// fs.writeFile(filepath, content1, "utf-8", (err) => {
//     if(err) {
//         console.log("an error has occured", err);
//         return;
//     }
//     console.log("File content written");
// })

//create a file and write JSON data into it should contain name, class, section, age
const filepath2 = 'output1.json';
const student = {
    name: 'Niladree',
    class: '2nd year',
    section: 'AK',
    age: 20 
}
const student1 = JSON.stringify(student, null, 2);
fs.writeFile(filepath2, student1, "utf-8", (err) => {
    if(err) {
        console.log("an error has occured", err);
        return;
    }
    console.log("Student data written to file");
})
write.end();