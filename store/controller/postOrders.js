const Order = require('../model/order')
const Customer = require('../model/customer')

const postOrders = async (req, res) => {
  const { id, status, total, buyer, items } = req.body

  const customer = await Customer.findOne({ id: buyer.id })

  try {
    var orders = new Order({
      id,
      status,
      total,
      buyer: customer._id,
      items
    })

    // if (await produto.checkId(id)) {
    //   return res.send({
    //     message: `id ${id} informado ja existente`
    //   })
    // }

    // if (await produto.checkSku(sku)) {
    //   return res.send({
    //     message: `sku ${sku} informado ja existente`
    //   })
    // }

    // if (await produto.checkName(name)) {
    //   return res.send({
    //     message: `name ${name} informado ja existente`
    //   })
    // }

    await orders.save()

    orders.buyer = customer

    return res.send({
      message: 'ok',
      retorno: orders.toObject()
    })
  } catch (error) {
    return res.send({
      erro: error
    })
  }
}

module.exports = {
  postOrders
}
