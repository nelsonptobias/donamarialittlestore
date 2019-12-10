var assert = require('assert')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

const { app } = require('../app')

chai.use(chaiHttp)

describe('/POST Produto', () => {
  it('Verifica se foi enviado token na requisicao', (done) => {
    const produto = {
      price: 20
    }

    chai.request('http://localhost:3000/store/')
      .post('/v1/products')
      .send(produto)
      .end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        res.should.have.status(400)
        done()
      })
  })
})
