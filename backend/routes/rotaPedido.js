const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

// GET - listar todos os pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('itens.produto');
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar pedidos' });
  }
});

// POST - criar novo pedido
router.post('/', async (req, res) => {
  try {
    const novoPedido = new Pedido(req.body);
    const salvo = await novoPedido.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao salvar pedido' });
  }
});

module.exports = router;
