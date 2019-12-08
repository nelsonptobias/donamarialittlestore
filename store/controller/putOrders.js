const Order = require('../model/order')

const putOrders = async (req, res) => {
  const { order_id, status } = req.body

  try {
    var order = await Order.findOneAndUpdate({ id: order_id }, { status: status })
    order.status = status

    return res.send({
      message: 'ok',
      retorno: order.toObject()
    })
  } catch (error) {
    return res.send({
      erro: error
    })
  }
}

module.exports = {
  putOrders
}
