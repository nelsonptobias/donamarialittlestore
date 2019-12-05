const Produto = require('../model/Produto')

const getProducts = async (req, res) => {
  const produtos = await Produto.find({})

  return res.send(
    produtos
  )
}

module.exports = {
  getProducts
}
