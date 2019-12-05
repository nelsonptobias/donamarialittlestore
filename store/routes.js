const { Router } = require('express')

const {
  postProducts,
  getProducts,
  postCustomers
} = require('./controller')

const storeRoutes = Router()

storeRoutes.post('/v1/products', postProducts)
storeRoutes.get('/v1/products', getProducts)

storeRoutes.post('/v1/customers', postCustomers)

module.exports = {
  storeRoutes
}
