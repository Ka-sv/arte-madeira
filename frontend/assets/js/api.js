const API_URL = 'https://arte-madeira.onrender.com/api/produtos';


async function obterProdutos() {
  const resposta = await fetch(API_URL);
  return await resposta.json();
}


async function obterProdutos() {
  try {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error('Erro ao buscar produtos');
    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    return [];
  }
}