const event = require('events');

const myEvent = new event.EventEmitter();

myEvent.on("firstEvent",()=>{
    console.log('this is the first event');
})

myEvent.on("secondEvent",()=>{
    console.log("this is my second event");
})
myEvent.emit("secondEvent");
myEvent.emit("firstEvent");

//every action happens in page this called as event
//we can use EventEmmiter() class
//use emit("event_name") to trigger event