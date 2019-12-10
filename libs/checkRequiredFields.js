const jwt = require('jsonwebtoken')

const checkRequiredFields = (requiredFields) => {
  return async (req, res, next) => {
    const body = req.body

    try {
      const token = req.headers['x-api-key']

      const userInfo = jwt.verify(token, 'banana')
      if (!userInfo) {
        throw new Error('Invalid api-key')
      }

      if (requiredFields) {
        requiredFields.map(function (requiredField) {
          if (typeof body[requiredField] === 'undefined') {
            throw new Error(`campo ${requiredField} e obrigatorio`)
          }
        })
      }

      next()
    } catch (error) {
      return res
        .status(400)
        .send({ error, message: error.message || 'Params check failure' })
    }
  }
}

module.exports = {
  checkRequiredFields
}
