// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./models/produto');

const produtos = [
  {
    nome: "Armário Planejado",
    descricao: "Feito sob medida em MDF.",
    preco: 800,
    tipo: "inteira",
    imagem: "armario.png"
  },
  {
    nome: "Prateleira",
    descricao: "Prateleira decorativa para parede.",
    preco: 120,
    tipo: "cortada",
    imagem: "prateleira.png"
  },
  {
    nome: "Rack para TV",
    descricao: "Modelo rústico em madeira maciça.",
    preco: 300,
    tipo: "inteira",
    imagem: "rack.png"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Produto.deleteMany();
    await Produto.insertMany(produtos);
    console.log("✅ Produtos inseridos!");
  } catch (erro) {
    console.error("❌ Erro ao inserir produtos:", erro);
  } finally {
    mongoose.disconnect();
  }
}

seed();
