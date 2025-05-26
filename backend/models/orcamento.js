const mongoose = require("mongoose");

const orcamentoSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  dataDesejada: Date,
  observacoes: String
}, {
  timestamps: true
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
