document.addEventListener('DOMContentLoaded', async () => {
    const produtos = await obterProdutos();
    const container = document.getElementById('produtos-destaque');
    
    produtos.slice(0, 3).forEach(produto => {
      const div = document.createElement('div');
      div.className = 'produto';
      div.innerHTML = `
        <img src="img/${produto.imagem}" alt="${produto.nome}">
        <h4>${produto.nome}</h4>
        <p>${produto.descricao}</p>
      `;
      container.appendChild(div);
    });
  });
  