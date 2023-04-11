const myEmitter = require('./eventEmitter');

myEmitter.on('login', user => {
  console.log(`User ${user} logged in`);
});

myEmitter.emit('login', 'Alice');
