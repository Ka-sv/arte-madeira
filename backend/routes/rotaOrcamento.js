const express = require('express');
const router = express.Router();
const Orcamento = require('../models/orcamento');

// GET - listar orçamentos
router.get('/', async (req, res) => {
  try {
    const orcamentos = await Orcamento.find();
    res.json(orcamentos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar orçamentos' });
  }
});

// POST - agendar novo orçamento
router.post('/', async (req, res) => {
  try {
    const novo = new Orcamento(req.body);
    const salvo = await novo.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao agendar orçamento' });
  }
});

module.exports = router;
