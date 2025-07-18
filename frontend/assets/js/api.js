const API_URL = 'https://arte-madeira.onrender.com/produtos.html';  // ajuste conforme backend

async function obterProdutos() {
  const resposta = await fetch(API_URL);
  return await resposta.json();
}
