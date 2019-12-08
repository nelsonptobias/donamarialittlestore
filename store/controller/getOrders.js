const Order = require('../model/order')

const getOrders = async (req, res) => {
  var orders = await Order.find({})
  orders = orders.map(function (item) {
    return item.toObject()
  })

  return res.send(
    orders
  )
}

module.exports = {
  getOrders
}
