const { model, Schema } = require('mongoose')

const Customer = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true
})

Customer.methods.checkId = async function checkId (idCustomer) {
  return this.model('Customer').findOne({
    id: idCustomer
  })
}

Customer.methods.checkCpf = async function checkSkuCpf (cpfCustomer) {
  return this.model('Customer').findOne({
    cpf: cpfCustomer
  })
}

Customer.methods.checkEmail = async function checkEmail (emailCustomer) {
  return this.model('Customer').findOne({
    email: emailCustomer
  })
}

module.exports = model('Customer', Customer)
