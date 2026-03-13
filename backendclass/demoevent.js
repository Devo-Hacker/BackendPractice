//executing the repl
//to check whether the year is a leap year or not
//to check if the number is prime or not
//print a welcome message for the user, and user name is ashwani

var event = require('events');
var obj = new event();

obj.addListener('marketopen', (msg) =>{
    console.log(msg);
})
obj.emit('marketopen', 'the market is now open');
obj.on('weather', (msg) => {
    console.log(msg);
})
obj.emit('weather', 'today is a hot and cool day');

obj.once('sing', (msg) => {
    console.log(msg);
})
obj.emit('sing', 'la lalalala');// only once

console.log(obj.getMaxListeners());
obj.setMaxListeners(27);

//functions

var fun1 = () => {
    console.log("I manifest her");
}
var fun2 = () => {
    console.log("coz i think i made for her");
}
obj.addListener("marketopen", fun1); //this is called callback function
obj.on("marketopen", fun2);
obj.emit("marketopen");


obj.removeListener("marketopen", fun1);
obj.emit("marketopen");

obj.removeAllListeners("marketopen");