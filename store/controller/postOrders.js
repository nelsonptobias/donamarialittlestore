const Order = require('../model/order')
const Customer = require('../model/customer')

const postOrders = async (req, res) => {
  const { id, status, total, items, customer_id } = req.body

  try {
    const customer = await Customer.findOne({ id: customer_id })
    var orders = new Order({
      id,
      status,
      total,
      buyer: customer,
      items
    })

    if (await orders.checkId(id)) {
      return res.send({
        message: `id ${id} informado ja existente`
      })
    }

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
