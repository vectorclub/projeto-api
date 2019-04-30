const express = require('express');

const router = express.Router();

const produtoController = require('../controller/produto');

router.get('/produto', produtoController.listar);
router.post('/produto', produtoController.criar);

module.exports = router;
