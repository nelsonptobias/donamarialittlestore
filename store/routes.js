const { Router } = require('express')

const {
  products
} = require('./controller')

const storeRoutes = Router()

storeRoutes.post('/v1/products', products)

module.exports = {
  storeRoutes
}
