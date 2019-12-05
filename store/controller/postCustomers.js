const Customer = require('../model/customer')

const postCustomers = async (req, res) => {
  const { id, name, cpf, email } = req.body
  try {
    const customer = new Customer({
      id,
      name,
      cpf,
      email
    })

    const validarCpf = require('validar-cpf')

    if (!validarCpf(cpf)) {
      return res.send({
        message: `cpf ${cpf} invalido`
      })
    }

    if (await customer.checkId(id)) {
      return res.send({
        message: `id ${id} informado ja existente`
      })
    }

    if (await customer.checkCpf(cpf)) {
      return res.send({
        message: `cpf ${cpf} informado ja existente`
      })
    }

    if (await customer.checkEmail(email)) {
      return res.send({
        message: `email ${email} informado ja existente`
      })
    }

    await customer.save()

    return res.send({
      message: 'ok',
      retorno: customer
    })
  } catch (error) {
    return res.send({
      erro: error
    })
  }
}

module.exports = {
  postCustomers
}
