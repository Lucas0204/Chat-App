const router = require('express').Router()
const IndexController = require('./controllers/IndexController')
const GetMessagesController = require('./controllers/GetMessagesController')

const indexController = new IndexController()
const getMessagesController = new GetMessagesController()

router.get('/', indexController.render)

router.get('/messages', getMessagesController.get)

module.exports = router
