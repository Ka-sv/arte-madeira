const API_URL = 'http://localhost:3000/api/produtos';  // ajuste conforme backend

async function obterProdutos() {
  const resposta = await fetch(API_URL);
  return await resposta.json();
}
