// eg custom event

const {EventEmitter} = require("events"); // import event emitter from events module
const eventemitter = new EventEmitter; // create a custom eventemitter by initiating a class

eventemitter.on("Lunch", () => { // register a callback that fires on the "lunch" event
    console.log("Event Triggered");
})

eventemitter.emit("Lunch"); // this will trigger the callback fn to run
eventemitter.emit("Lunch");