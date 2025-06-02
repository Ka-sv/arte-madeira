document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('produtos-container');

  try {
    const resposta = await fetch('http://localhost:3000/api/produtos');
    
    const produtos = await resposta.json();

    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'card-produto';
      card.innerHTML = `
        <img src="./assets/img/${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
        <span class="tipo">${produto.tipo === 'inteira' ? 'Chapa Inteira' : 'Cortado'}</span>
      `;
      container.appendChild(card);
    });

  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    container.innerHTML = '<p>Erro ao carregar produtos.</p>';
  }
});
