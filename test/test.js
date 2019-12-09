var assert = require('assert')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)

describe('/POST Produto', () => {
  it('Verificar o cadastro de Artigo', (done) => {
    const produto = { // Vamos deinir o artigo que vamos inserir
      price: 20
    }

    chai.request('http://localhost:3000/store/')
      .post('/v1/products')
      .send(produto) // vamos enviar esse arquivo
      .end((err, res) => {
        console.log(err)
        res.should.have.status(400)
        done()
      })
  })
})
