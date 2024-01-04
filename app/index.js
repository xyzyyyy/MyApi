const express = require('express')
const app = express()
const cors = require('cors')
const secure = require('ssl-express-www')
const apiRoute = require('./route/api.js')
const router = require('./route/main.js')

app.use(cors())
app.use(secure)
app.set("json spaces", 2)

app.use('/', router)

app.use('/api', apiRoute)

module.exports = app
