let messageHistory = [
    'Lucas: Salve',
    'Igor: Opa, bom',
    'Lucas: Tudo certo',
    'Lucas: Tamo Junto',
    'Igor: é nois'
]

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
