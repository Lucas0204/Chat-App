const socketIo = require('socket.io')
const Messages = require('./model/Messages')

function socket(server) {

    const io = socketIo(server)

    io.on('connection', socket => {
        console.log(`Connected: ${socket.id}`)
    
        socket.on('sendMessage', async message => {

            await Messages.save(message)

            socket.broadcast.emit('newMessage', message)
        })
    })
}

module.exports = socket
