// events and callbacks useful for cpu intensive tasks
//eg of builtin event
process.on('exit', function() {
    // we can listen to event using on and register a call back fn as 2nd argument
    
    // when the exit event occurs nodejs will run the function
    /* its called callback fn cause the fn isnt called first time nodejs sees it,
       its called only when an "exit" event occurs in future*/
})

// eg custom event

const {EventEmitter} = require("events"); // import event emitter from events module
const eventemitter = new EventEmitter; // create a custom eventemitter by initiating a class

eventemitter.on("Lunch", () => { // register a callback that fires on the "lunch" event
    console.log("Event Triggered");
})

eventemitter.emit("Lunch"); // this will trigger the callback fn to run
eventemitter.emit("Lunch");