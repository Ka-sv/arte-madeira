const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  itens: [
    {
      produto: { type: mongoose.Schema.Types.ObjectId, ref: "Produto" },
      quantidade: Number,
      medidas: [ // se for cortado
        {
          largura: Number,
          altura: Number
        }
      ]
    }
  ],
  cliente: {
    nome: String,
    telefone: String
  },
  total: Number,
  tipoCompra: { type: String, enum: ["inteira", "cortada"] },
}, {
  timestamps: true
});

module.exports = mongoose.model("Pedido", pedidoSchema);
