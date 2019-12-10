const Produto = require('../model/produto')

const getProducts = async (req, res) => {
  var produtos = await Produto.find({})
  produtos = produtos.map(function (item) {
    return item.toObject()
  })

  return res.send(
    produtos
  )
}

module.exports = {
  getProducts
}
