var express = require('express')
var router = express.Router()
var db = require('../db')
const { ClientModel } = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET ALL clients */
router.get('/require', function (req, res, next) {
  ClientModel.find().exec()
    .then(clients => {
      console.log(clients)
      res.json(clients)
    })
    .catch(errors => {
      console.error('Erro ao buscar clientes: ', errors)
      res.status(500).send('Erro ao buscar clientes')
    });
});

/* GET ONE client */
router.get('/require/:id', function (req, res, next) {
  ClientModel.find({ _id: req.params.id }).exec()
    .then(client => {
      res.json(client)
      res.end();
    })
    .catch(errors => {
      console.error('Erro ao buscar cliente: ', errors)
      res.status(500).send('Erro ao buscar cliente')
    })
});

module.exports = router;