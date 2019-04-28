const express = require('express');
const route = express.Router();

const pedidoController = require('../controller/pedido');

route.get('/pedido', pedidoController.listar);
route.post('/pedido', pedidoController.criar);

module.exports = route;