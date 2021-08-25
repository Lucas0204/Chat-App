const router = require('express').Router()
const IndexController = require('./controllers/IndexController')

const indexController = new IndexController()

router.get('/', indexController.render)

module.exports = router
