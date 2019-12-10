const { Router } = require('express')
const lib = require('../libs/checkRequiredFields')
const { config } = require('../config')

const {
  postProducts,
  getProducts,
  postCustomers,
  postOrders,
  putOrders,
  getOrders,
  postUser
} = require('./controller')

const storeRoutes = Router()

storeRoutes.post('/v1/products', lib.checkRequiredFields(config.REQUIRED_FIELDS_PRODUCT), postProducts)
storeRoutes.get('/v1/products', lib.checkRequiredFields(), getProducts)

storeRoutes.post('/v1/customers', lib.checkRequiredFields(config.REQUIRED_FIELDS_CUSTOMER), postCustomers)

storeRoutes.post('/v1/orders', lib.checkRequiredFields(config.REQUIRED_FIELDS_ORDER), postOrders)
storeRoutes.put('/v1/orders/:id_order', lib.checkRequiredFields(), putOrders)
storeRoutes.get('/v1/orders', lib.checkRequiredFields(), getOrders)

storeRoutes.post('/', postUser)

module.exports = {
  storeRoutes
}
