const Messages = require('../model/Messages')

class GetMessagesController {

    get(req, res) {
        const messages = Messages.get()

        return res.json(messages)
    }
}

module.exports = GetMessagesController
