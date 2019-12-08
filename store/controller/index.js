const { postProducts } = require('./postProducts')
const { getProducts } = require('./getProducts')
const { postCustomers } = require('./postCustomers')
const { postOrders } = require('./postOrders')
const { putOrders } = require('./putOrders')
const { getOrders } = require('./getOrders')

module.exports = {
  postProducts,
  getProducts,
  postCustomers,
  postOrders,
  putOrders,
  getOrders
}
