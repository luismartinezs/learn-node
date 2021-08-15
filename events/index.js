const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', ({ number = 0 } = {}) => {
  console.log(`started with number ${number}`)
})

eventEmitter.emit('start', { number: 42 })
