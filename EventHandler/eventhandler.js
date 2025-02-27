import {EventEmitter} from 'events';

function CountHandler(emitter) {
    this.count = 0

    emitter.on('event', (event) => {
        this.count++;
        console.log(event)
        console.log('event fired')
    });
}

let eventCount = 0;

const eventEmitter = new EventEmitter();
eventEmitter.emit('event', 'event');