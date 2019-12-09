const checkRequiredFields = (requiredFields) => {
  return async (req, res, next) => {
    const body = req.body

    try {
      requiredFields.map(function (requiredField) {
        if (!body[requiredField]) {
          throw new Error(`camopo ${requiredField} e obrigatorio`)
        }
      })

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
