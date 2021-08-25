let user;

document.addEventListener('DOMContentLoaded', () => {

    const registerUsernameButton = document.querySelector('.username-field button')
    const sendMessageButton = document.querySelector('.send-message button')
    
    registerUsernameButton.addEventListener('click', (event) => {
        registerUsername(event)
        // messages = getMessages()
    })

    sendMessageButton.addEventListener('click', sendMessage)
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
    
}


// async function getMessages() {

//     const messagesResponse = await fetch('http://localhost:3000/messages')
//     const messages = await messagesResponse.json()

//     return messages
// }
