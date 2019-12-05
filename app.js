const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connection = require('./libs/db')

const { storeRoutes } = require('./store/routes')

connection.db.connect()

app.use(bodyParser.json())

app.use('/store', storeRoutes)

app.listen(3000, function () {
  console.log('Api up on port 3000')
})
