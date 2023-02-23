let Emitter = require('events');
let config = require('./config.js');

let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});
emtr.emit("greet");

emtr.on("saludo",()=>{
    console.log( "saludo3") 
})
emtr.emit("saludo");