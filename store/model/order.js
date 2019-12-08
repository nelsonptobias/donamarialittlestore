const { model, Schema } = require('mongoose')

const Order = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  status: {
    type: String,
    unique: true,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  buyer: {
    type: Schema.Types.ObjectId, ref: 'Customer'
  },
  items: [
    {
      amount: {
        type: Number,
        required: true
      },
      price_unit: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      },
      product: {
        id: {
          type: Number,
          required: true
        },
        sku: {
          type: Number,
          required: true
        },
        title: {
          type: String,
          required: true
        }
      }
    }
  ]
}, {
  timestamps: true,
  toObject: {
    transform: function (doc, ret) {
      delete ret._id
      ret.items.forEach(function (item) {
        delete item._id
      })
      delete ret.updatedAt
      delete ret.__v
      delete ret.buyer._id
      delete ret.buyer.__v
      delete ret.createdAt
      delete ret.updatedAt
      delete ret.created_at
      delete ret.updated_at
    }
  }
})

// Order.methods.checkId = async function checkId (idOrder) {
//   return this.model('Order').findOne({
//     id: idOrder
//   })
// }

// Order.methods.checkSku = async function checkSku (skuOrder) {
//   return this.model('Order').findOne({
//     sku: skuOrder
//   })
// }

// Order.methods.checkName = async function checkName (nameOrder) {
//   return this.model('Order').findOne({
//     name: nameOrder
//   })
// }

module.exports = model('Order', Order)
