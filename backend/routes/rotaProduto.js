const express = require('express');
const router = express.Router();
// const Produto = require('../models/rotaProduto');
const Produto = require('../models/produto'); 


// GET - listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
});

// POST - adicionar um novo produto
router.post('/', async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    const salvo = await novoProduto.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao salvar produto' });
  }
});

// DELETE - remover produto por ID
router.delete('/:id', async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Produto removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao remover produto' });
  }
});

module.exports = router;
