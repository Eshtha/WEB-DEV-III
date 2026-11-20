const EventEmitter = require('events');
const emitter = new EventEmitter();

const informStudents = () => {
    console.log('Bell rang, students should come in the class', );
};

emitter.once('messageLogged', informStudents);

// emitter.on('messageLogged', (arg) => {
//     console.log('Bell rang, students should come in the class', arg);
// });

// emitter.on('messageLogged', (arg) => {
//     console.log('Bell rang, teacher can start the class', arg);
// });

emitter.emit('messageLogged');
emitter.emit('messageLogged');
// emitter.off('messageLogged', informStudents);
emitter.emit('messageLogged');