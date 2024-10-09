var express = require('express')
var router = express.Router()
const { ClientModel } = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET ALL register */
router.get('/get', function (req, res, next) {
  ClientModel.find()
    .then(clients => {
      console.log(clients)
      res.json(clients)
    })
    .catch(errors => {
      console.error('Erro ao buscar registro: ', errors)
      res.status(500).send('Erro ao buscar registro')
    });
});

/* GET ONE register */
router.get('/get/:id', function (req, res, next) {
  ClientModel.find({ _id: req.params.id })
    .then(client => {
      res.json(client)
      res.end();
    })
    .catch(errors => {
      console.error('Erro ao buscar registro: ', errors)
      res.status(500).send('Erro ao buscar registro')
    })
});

/* POST ONE register */
router.post('/post', function (req, res, next) {
  const client = new ClientModel({ id: req.body.id, name: req.body.name })
  client.save()
    .then(() => {
      console.log('Registro salvo com sucesso')
      res.json(client)
    })
    .catch(errors => {
      console.error('Erro ao salvar o registro:', errors)
      res.status(500).json({ error: errors.message })
    })
});

/* PUT ONE register */
router.put('/put/:id', function (req, res, next) {
  const client = new ClientModel({ id: req.body.id, name: req.body.name })
  ClientModel.findOneAndUpdate({ _id: req.params.id })
    .then(() => {
      console.log('Registro atualizado com sucesso')
      res.json(client)
    })
    .catch(errors => {
      console.error('Erro ao atualizar o registro:', errors)
      res.status(500).json({ error: errors.message })
    })
});

/* DELETE ONE register */
router.delete('/delete/:id', function (req, res, next) {
  const client = new ClientModel({ id: req.body.id, name: req.body.name })
  ClientModel.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      console.log('Registro deletado com sucesso')
      res.json(client)
    })
    .catch(errors => {
      console.error('Erro ao deletar o registro:', errors)
      res.status(500).json({ error: errors.message })
    })
});

module.exports = router;