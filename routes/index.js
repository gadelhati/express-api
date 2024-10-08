var express = require('express');
var router = express.Router();
var db = require('../db');
const { ClientSchema } = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET client */
router.get('/client', function (req, res, next) {
  ClientSchema.find().exec()
    .then(clients => {
      console.log(clients)
      res.json(clients)
    })
    .catch(errors => {
      console.error('Erro ao buscar clientes:', errors)
      res.status(500).send('Erro ao buscar clientes')
    });
});

module.exports = router;
