const Produto = require('../model/Produto')

const products = async (req, res) => {

    const {id, sku, name} = req.body

    const produto = new Produto ({
      id,
      sku,
      name
  })

    if (await produto.checkId(id)){
      return res.send({
        message: `id ${id} informado ja existente`,
      })
    }

    if (await produto.checkSku(sku)){
      return res.send({
        message: `sku ${sku} informado ja existente`,
      })
    }

    if (await produto.checkName(name)){
      return res.send({
        message: `name ${name} informado ja existente`,
      })
    }

    await produto.save(function(err) {
      if (err) {
          console.log(err);
          return res.send({
            erro: err});
      }else{

        return res.send({
          message: 'ok',
          retorno: produto
        })
      }
    })

}

module.exports = {
    products
}

