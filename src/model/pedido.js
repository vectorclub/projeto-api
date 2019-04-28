const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    produtos: [
        {
            id: mongoose.Types.ObjectId,
            quantidade: Number,
            subValor: Number,
        }
    ],
    cliente: mongoose.Types.ObjectId,
    dataCriacao: {
        type: Date,
        default: new Date()
    },
    valorTotal: Number,
    status: {
        type: String,
        enum: ['Recebido', 'Em andamento', 'Entregue'],
        default: 'Recebido',
    },
});

module.exports = mongoose.model('pedido', pedidoSchema);