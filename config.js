
const config = {
  DB_URI: 'mongodb://mongodb:27017/donamarialittlestore',
  REQUIRED_FIELDS_PRODUCT: ['id', 'sku', 'name', 'price'],
  REQUIRED_FIELDS_CUSTOMER: ['id', 'name', 'cpf', 'email'],
  REQUIRED_FIELDS_ORDER: ['id', 'customer_id', 'total', 'status']
}

module.exports = {
  config
}
