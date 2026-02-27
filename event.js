// const EventEmitter = require('events');//importing events module
// const emitter = new EventEmitter();//creating an event emitter object

// emitter.on('greet', () =>{
//     console.log('Hello Cutie!');
// })
// emitter.emit('greet');

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('start', ()=>
{
    console.log('The event has started');
})
emitter.emit('start');
