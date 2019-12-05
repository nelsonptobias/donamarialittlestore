const Produto = require('../model/Produto')

const products = async (req, res) => {
  const { id, sku, name } = req.body
  try {
    const produto = new Produto({
      id,
      sku,
      name
    })

    if (await produto.checkId(id)) {
      return res.send({
        message: `id ${id} informado ja existente`
      })
    }

    if (await produto.checkSku(sku)) {
      return res.send({
        message: `sku ${sku} informado ja existente`
      })
    }

    if (await produto.checkName(name)) {
      return res.send({
        message: `name ${name} informado ja existente`
      })
    }

    await produto.save()

    return res.send({
      message: 'ok',
      retorno: produto
    })
  } catch (error) {
    return res.send({
      erro: error
    })
  }
}

module.exports = {
  products
}
