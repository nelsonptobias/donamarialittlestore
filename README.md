# donamarialittlestore
API backend para a lojinha de dona maria

# executando
## com docker-compose
> docker-compose build  
> docker-compose up -d

## local
> npm install   
> node app.js

# running tests
> npm test

# validação de rota

Existe uma rota feita para geração de token:

post
http://localhost:3000/store

Para vias de teste pode informar qualquer username e password no json

EX
```
{
  "username": "usuario",
  "password": "123"
}
```

Ele vai gerar um token para usar no head das requisições


