const Messages = require('../model/Messages')

class IndexController {

    render(req, res) {
        const { users, messages } = getMessageHistory()
        return res.render('index', { users, messages })
    }
}

function getMessageHistory() {

    const messageHistory = Messages.get()

    const users = messageHistory.map(message => {
        const user = message.split(':')[0]
        return user
    })

    const messages = messageHistory.map(message => {
        const msg = message.split(':')[1]
        return msg
    })

    return { users, messages }
}

module.exports = IndexController
