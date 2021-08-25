let messageHistory = []

const Messages = {

    get() {
        return messageHistory
    },

    save(message) {
        messageHistory.push(message)
        return messageHistory
    }
}

module.exports = Messages
