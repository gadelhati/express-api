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

const ClientModel = mongoose.model('client', clientSchema);

module.exports = { Mongoose: mongoose, ClientModel }