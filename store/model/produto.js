const { model, Schema } = require('mongoose')

const Produto = new Schema({
  id: {
    type: Number,
    unique: true
  },
  sku: {
       type: Number,
       unique: true
  },
  name: {
    type: String,
    unique: true
  },
  price: {
    type: Number,
    unique: true
  },
}, {
  timestamps: true
})


module.exports = model('Produto', Produto)