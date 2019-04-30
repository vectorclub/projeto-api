const mongoose = require('mongoose');

const { Schema } = mongoose;

const produtoSchema = new Schema({
  nome: String,
  descricao: String,
  valor: Number,
  quantidade: Number,
});

module.exports = mongoose.model('produto', produtoSchema);
