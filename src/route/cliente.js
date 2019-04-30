const express = require('express');

const route = express.Router();

const clienteController = require('../controller/cliente');

route.get('/cliente', clienteController.listar);
route.post('/cliente', clienteController.criar);

module.exports = route;
