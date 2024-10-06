const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

// on and emit methods:
// emit is used to trigger an event
// on is used to add a callback function
// that's going to be executed when the event is trigerred


// .addListener() is a alias for .on()
eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);

// array of events as strings registered on
// the current EventEmitter object
console.log(eventEmitter.eventNames());

// other methods to interact with events:
// once(): add a one-time listener
// removeListener() / off(): remove an event listener from an event
// removeAllListeners(): remove all listeners for an event