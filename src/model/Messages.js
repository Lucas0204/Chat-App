const client = require('../database')

const Messages = {

    async get() {
        const messages = JSON.parse(await client.get('messages'))
        return messages
    },

    async save(message) {
        const messageHistory = await this.get()

        if (messageHistory) {
            await client.set('messages', JSON.stringify([ ...messageHistory, message ]))
        } else {
            await client.set('messages', JSON.stringify([ message ]))
        }
    }
}

module.exports = Messages
