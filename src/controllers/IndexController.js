const Messages = require('../model/Messages')

class IndexController {

    async render(req, res) {
        const messages = await Messages.get()
        return res.render('index', { messages })
    }
}

module.exports = IndexController
