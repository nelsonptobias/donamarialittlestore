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
    type: Number
  }
}, {
  timestamps: true
})

Produto.methods.checkId = async function checkId (idProduto) {
  return this.model('Produto').findOne({
    id: idProduto
  })
}

Produto.methods.checkSku = async function checkSku (skuProduto) {
  return this.model('Produto').findOne({
    sku: skuProduto
  })
}

Produto.methods.checkName = async function checkName (nameProduto) {
  return this.model('Produto').findOne({
    name: nameProduto
  })
}

module.exports = model('Produto', Produto)
