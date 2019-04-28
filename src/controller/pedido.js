const Pedido = require('../model/pedido');

exports.criar = (req, res) => {
    let dados = new Pedido({
        produtos: req.body.produtos,
        cliente: req.body.cliente,
        valorTotal: req.body.valorTotal,
    });

    dados.save()
        .then(result => {
            res.status(200).json({
                status: 200,
                mensagem: 'OK',
                dados: result,
                metodo: 'POST',
                url: 'http://localhost:3000/pedido'
            });
        })
        .catch(erro => {
            res.status(500).json({
                status: 500,
                mensagem: 'Erro ao criar pedido',
                dados: erro,
            });
        });
};

exports.listar = (req, res) => {
    Pedido.find({})
        .then(result => {
            res.status(200).json({
                status: 200,
                mensagem: 'OK',
                dados: result,
                metodo: 'GET',
                url: 'http://localhost:3000/pedido'
            });
        })
        .catch(erro => {
            res.status(500).json({
                status: 500,
                mensagem: 'Erro ao listar pedido',
                dados: erro,
            });
        });
}