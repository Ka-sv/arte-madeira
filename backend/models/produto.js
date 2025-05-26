const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: String,
  preco: { type: Number, required: true },
  tipo: { type: String, enum: ["inteira", "cortada"], required: true },
  imagem: String
}, {
  timestamps: true
});

module.exports = mongoose.model("Produto", produtoSchema);
