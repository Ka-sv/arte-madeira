// async function carregarProdutos() {
//     try {
//       const res = await fetch('/rotaProduto'); // rota da API que você já tem
//       const produtos = await res.json();
  
//       const container = document.getElementById('produtos-container');
//       container.innerHTML = '';
  
//       produtos.forEach(produto => {
//         const card = document.createElement('div');
//         card.className = 'card';
  
//         card.innerHTML = `
//           <img src="${produto.imagem}" alt="${produto.nome}" />
//           <h3>${produto.nome}</h3>
//           <p>${produto.descricao}</p>
//           <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
//           <p><strong>Tipo:</strong> ${produto.tipo}</p>
//         `;
  
//         container.appendChild(card);
//       });
//     } catch (error) {
//       console.error('Erro ao carregar produtos:', error);
//     }
//   }
  
//   document.addEventListener('DOMContentLoaded', carregarProdutos);
fetch('/rotaProduto')
.then(response => response.json())
.then(produtos => {
  const container = document.getElementById('produtos-container');
  produtos.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="./assets/img/${prod.imagem}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      <p>${prod.descricao}</p>
      <p>R$ ${prod.preco.toFixed(2)}</p>
    `;
    container.appendChild(card);
  });
})
.catch(err => console.error('Erro ao buscar produtos:', err));
