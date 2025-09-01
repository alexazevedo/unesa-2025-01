const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota GET para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter livros', erro: error.message });
    }
});

// Rota POST para incluir um novo livro
router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        const resultado = await incluir(livro);
        res.json({ mensagem: 'Livro incluído com sucesso', livro: resultado });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro', erro: error.message });
    }
});

// Rota DELETE para excluir um livro pelo código (_id)
router.delete('/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const resultado = await excluir(codigo);
        
        if (resultado.deletedCount > 0) {
            res.json({ mensagem: 'Livro excluído com sucesso' });
        } else {
            res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro', erro: error.message });
    }
});

module.exports = router;
