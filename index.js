const express = require('express');

const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://root:password@127.0.0.1:27019/vendas?authSource=admin', { useNewUrlParser: true });

const routeProduto = require('./src/route/produto');
const routeCliente = require('./src/route/cliente');
const routePedido = require('./src/route/pedido');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routeProduto);
app.use('/', routeCliente);
app.use('/', routePedido);

app.get('/', (req, res) => {
  res.send('<h1> Bem-vindo ao servido de vendas </h1>');
});

app.listen(3000, () => {
  console.log('Server on port 3000'); //eslint-disable-line
});
