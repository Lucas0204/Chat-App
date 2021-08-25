const socketIo = require('socket.io')
const Messages = require('./model/Messages')

let messages = [
    { user: 'Diego', message: 'Opa, fala galera!' }
]

function socket(server) {

    const io = socketIo(server)

    io.on('connection', socket => {
        console.log(`Connected: ${socket.id}`)
    
        socket.on('sendMessage', message => {

            Messages.save(message)

            socket.broadcast.emit('newMessage', message)

            console.log(`${message.user}: ${message.message}`)
        })
    })
}

module.exports = socket
