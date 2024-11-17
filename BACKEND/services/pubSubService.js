const events = require('events');
const eventEmitter = new events.EventEmitter();

const queue = [];

eventEmitter.on('dataValidation', (data) => {
  queue.push(data);
  console.log('Data added to queue:', data);
});

setInterval(() => {
  if (queue.length > 0) {
    const data = queue.shift();
    console.log('Processing data:', data);
  }
}, 1000);

module.exports = eventEmitter;
