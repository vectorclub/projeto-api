const Cliente = require('../model/cliente');

exports.criar = (req, res) => {
  const dados = new Cliente({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    endereco: {
      cep: req.body.endereco.cep,
      rua: req.body.endereco.rua,
      numero: req.body.endereco.numero,
      complemento: req.body.endereco.complemento,
      bairro: req.body.endereco.bairro,
      cidade: req.body.endereco.cidade,
      estado: req.body.endereco.estado,
    },
  });

  dados.save()
    .then((result) => {
      res.status(200).json({
        status: 200,
        mensagem: 'OK',
        dados: result,
        metodo: 'POST',
        url: 'http://localhost:3000/cliente',
      });
    })
    .catch((erro) => {
      res.status(500).json({
        status: 500,
        mensagem: 'Erro ao criar cliente',
        dados: erro,
      });
    });
};

exports.listar = (req, res) => {
  Cliente.find({})
    .then((result) => {
      res.status(200).json({
        status: 200,
        mensagem: 'OK',
        dados: result,
        metodo: 'GET',
        url: 'http://localhost:3000/cliente',
      });
    })
    .catch((erro) => {
      res.status(500).json({
        status: 500,
        mensagem: 'Erro ao listar cliente',
        dados: erro,
      });
    });
};
