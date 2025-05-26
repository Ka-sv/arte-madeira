require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const rotaProduto = require('./routes/rotaProduto');
const rotaPedido = require('./routes/rotaPedido');
const rotaOrcamento = require('./routes/rotaOrcamento');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/produtos', rotaProduto);
app.use('/api/pedidos', rotaPedido);
app.use('/api/orcamentos', rotaOrcamento);
console.log('MONGO_URI:', process.env.MONGO_URI);

// Conexão com MongoDB
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no MongoDB:', err);
  });