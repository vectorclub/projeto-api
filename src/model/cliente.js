const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome: String,
    email: String,
    telefone: String,
    endereco: {
        cep: String,
        rua: String,
        numero: String,
        complemento: String,
        bairro: String,
        cidade: String,
        estado: String
    }
});

module.exports = mongoose.model('cliente', clienteSchema);