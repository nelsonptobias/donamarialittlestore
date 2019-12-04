const Produto = require('../model/Produto')

const products = async (req, res) => {

    const {id, sku, name} = req.body

    const produto = new Produto ({
        id,
        sku,
        name
    })

    await produto.save()

  res.send({
    message: 'ok',
    retorno: produto
  })
}

module.exports = {
    products
}

