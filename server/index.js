const config = require('../config.json')
const express = require('express')
const server = express()
const app = require('../app/index.js')

server.use('/', app)

server.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})