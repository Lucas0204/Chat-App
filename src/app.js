const express = require('express')
const app = express()
const routes = require('./routes')

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.static('public'))
app.use(routes)

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        error: 'Internal server error!'
    })
})

module.exports = app
