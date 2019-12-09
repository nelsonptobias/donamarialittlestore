const { Router } = require('express')
const lib = require('../libs/checkRequiredFields')
const { config } = require('../config')

const {
  postProducts,
  getProducts,
  postCustomers,
  postOrders,
  putOrders,
  getOrders
} = require('./controller')

const storeRoutes = Router()

storeRoutes.post('/v1/products', lib.checkRequiredFields(config.REQUIRED_FIELDS_POST_PRODUCT), postProducts)
storeRoutes.get('/v1/products', getProducts)

storeRoutes.post('/v1/customers', lib.checkRequiredFields(config.REQUIRED_FIELDS_CUSTOMER), postCustomers)

storeRoutes.post('/v1/orders', lib.checkRequiredFields(config.REQUIRED_FIELDS_ORDER), postOrders)
storeRoutes.put('/v1/orders/:id_order', putOrders)
storeRoutes.get('/v1/orders', getOrders)

module.exports = {
  storeRoutes
}
