var express = require('express');
const bodyParser = require('body-parser')
var app = express();
var connection = require('./libs/db')

const { storeRoutes } = require('./store/routes')

connection.db.connect()

app.use(bodyParser.json())

app.use('/store', storeRoutes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
