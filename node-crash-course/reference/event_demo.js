const EventEmitter = require('events');

// Create class

class MyEmitter extends EventEmitter{ }

// init object
const myEmitter = new MyEmitter();

// create event listener
myEmitter.on('event', () => {
    console.log("Event fired")
})

// Init event
myEmitter.emit('event')