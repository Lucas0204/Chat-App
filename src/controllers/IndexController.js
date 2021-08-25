const Messages = require('../model/Messages')

class IndexController {

    render(req, res) {
        const messages = Messages.get()
        return res.render('index', { messages })
    }
}

module.exports = IndexController
