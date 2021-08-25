let user;

const socket = io('http://localhost:3000')

document.addEventListener('DOMContentLoaded', () => {

    const messagesContainer = document.querySelector('.messages-container')
    const registerUsernameButton = document.querySelector('.username-field button')
    const sendMessageButton = document.querySelector('.send-message button')
    
    registerUsernameButton.addEventListener('click', (event) => {
        registerUsername(event)
    })

    sendMessageButton.addEventListener('click', sendMessage)

    socket.on('newMessage', message => {
        messagesContainer.innerHTML += `<div class="message">${message.user}: ${message.message}</div>`
    })
})


function registerUsername(event) {
    const username = document.querySelector('.username-field input').value

    if (!username) {
        return 
    }

    user = username

    const popUp = event.target.parentElement.parentElement

    popUp.style.display = 'none'
}

function sendMessage() {
    const message = document.querySelector('.send-message input').value

    if (message) { 
        socket.emit('sendMessage', { user, message })

        document.querySelector('.messages-container').innerHTML += `<div class="message">${user}: ${message}</div>`

        document.querySelector('.send-message input').value = ''
    }
}
