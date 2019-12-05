const Produto = require('../model/produto')

const getProducts = async (req, res) => {
  const produtos = await Produto.find({})

  return res.send(
    produtos
  )
}

module.exports = {
  getProducts
}
