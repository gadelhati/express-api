const mongoose = require('mongoose');

const main = async() => {
    await mongoose.connect('mongodb://localhost:27017/express-api')
}

main()
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const clientSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true }
});

const ClientSchema = mongoose.model('Client', clientSchema);

const novoCliente = new ClientSchema({ id: '1', name: 'João' });
novoCliente.save()
  .then(() => console.log('Cliente salvo com sucesso'))
  .catch(err => console.error('Erro ao salvar o cliente:', err));

module.exports = { Mongoose: mongoose, ClientSchema }