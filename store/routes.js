const { Router } = require('express')

const {
  postProducts,
  getProducts
} = require('./controller')

const storeRoutes = Router()

storeRoutes.post('/v1/products', postProducts)
storeRoutes.get('/v1/products', getProducts)

module.exports = {
  storeRoutes
}
