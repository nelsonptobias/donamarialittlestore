const mongoose = require('mongoose')
const { config } = require('../config')

const connect = () =>
  mongoose.connect(config.DB_URI, { useNewUrlParser: true })

module.exports = {
  db: { connect }
}