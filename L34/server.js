const EventEmitter = require('events');
const emitter = new EventEmitter();

const informStudents = (time) => {
    console.log(`Bell rang at ${time}, students should come in the class`, time);
};

emitter.on('bell-rang', informStudents);

// emitter.on('messageLogged', (arg) => {
//     console.log('Bell rang, students should come in the class', arg);
// });

// emitter.on('messageLogged', (arg) => {
//     console.log('Bell rang, teacher can start the class', arg);
// });

emitter.emit('bell-rang', "10:00 AM");
emitter.emit('bell-rang', "11:00 AM");
// emitter.off('messageLogged', informStudents);
emitter.emit('bell-rang', "12:00 AM");