const Produto = require('../model/produto');

exports.criar = (req, res) => {
    const dados = new Produto({
        nome: req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor,
        quantidade: req.body.quantidade
    });

    dados.save()
        .then(result => {
            res.status(200).json({
                status: 200,
                mensagem: 'OK',
                dados: result,
                metodo: 'POST',
                url: 'http://localhost:3000/produto'
            });
        })
        .catch(erro => {
            res.status(500).json({
                status: 500,
                mensagem: 'Erro ao criar produto',
                dados: erro,
            });
        });
};

exports.listar = (req, res) => {
    Produto.find({})
        .then(result => {
            res.status(200).json({
                status: 200,
                mensagem: 'OK',
                dados: result,
                metodo: 'GET',
                url: 'http://localhost:3000/produto'
            });
        })
        .catch(erro => {
            res.status(500).json({
                status: 500,
                mensagem: 'Erro ao listar produto',
                dados: erro,
            });
        });
}