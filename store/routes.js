const { Router } = require('express')

const {
 products,
} = require('./controller')

const storeRoutes = Router()

storeRoutes.post('/', products)


module.exports = {
   storeRoutes
}