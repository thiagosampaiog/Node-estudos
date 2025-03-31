const EventEmitter = require('events');
const eventEmitter = new EventEmitter()  // criar um objeto do modulo que é uma classe

eventEmitter.on('start', () => {
    console.log("Durante")
})

console.log("Antes");

eventEmitter.emit("start"); // 

console.log("Depois");