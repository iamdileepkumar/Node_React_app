const EventEmitter = require('events')
//const Logger = require('./logger')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

// myEmitter.on('event', ()=>console.log('Event occurred'))
// myEmitter.emit('event')
// const logger = new Logger()
// logger.on('message', function(data){
//     console.log('Called listener: ', data, this )
// } )
// logger.loge('HEllo world')

// myEmitter.on('event', (a,b)=>{
//     setImmediate(()=>{
//         console.log('this happens immediately');
        
//     })
// })

// myEmitter.emit('event', 'a', 'b')


myEmitter.once('newListener', (event, listener)=>{
    if(event==='event'){
        myEmitter.on('event', ()=>console.log('B'))
    }
})

myEmitter.on('event', ()=>console.log('A'))
myEmitter.emit('event')