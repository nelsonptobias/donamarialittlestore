const { Router } = require('express')

const {
  postProducts,
  getProducts,
  postCustomers,
  postOrders,
  putOrders,
  getOrders
} = require('./controller')

const storeRoutes = Router()

storeRoutes.post('/v1/products', postProducts)
storeRoutes.get('/v1/products', getProducts)

storeRoutes.post('/v1/customers', postCustomers)

storeRoutes.post('/v1/orders', postOrders)
storeRoutes.put('/v1/orders/:id_order', putOrders)
storeRoutes.get('/v1/orders', getOrders)

module.exports = {
  storeRoutes
}
