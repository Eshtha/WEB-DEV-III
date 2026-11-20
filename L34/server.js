const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => {
    console.log('Bell rang, students should come in the class', arg);
});

emitter.on('messageLogged', (arg) => {
    console.log('Bell rang, teacher can start the class', arg);
});

emitter.emit('messageLogged');