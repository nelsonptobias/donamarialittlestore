const jwt = require('jsonwebtoken')

const postUser = async (req, res) => {
  const { password, username } = req.body

  const token = jwt.sign({ name: username, pass: password }, 'banana')

  res.send({ toeken: token })
}

module.exports = {
  postUser
}
