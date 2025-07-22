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

// Rotas da API
app.use('/api/produtos', rotaProduto);
app.use('/api/pedidos', rotaPedido);
app.use('/api/orcamentos', rotaOrcamento);

// Conexão com MongoDB e inicialização do servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no MongoDB:', err);
  });
