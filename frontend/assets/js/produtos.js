document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('produtos-container');

  try {
    const resposta = await fetch('https://arte-madeira.onrender.com/api/produtos');
    const produtos = await resposta.json();

    produtos.forEach((produto, index) => {
      const card = document.createElement('div');
      card.className = 'card-produto';
      card.innerHTML = `
        <img src="./assets/img/${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
        <span class="tipo">${produto.tipo === 'inteira' ? 'Chapa Inteira' : 'Cortado'}</span>

        <div class="opcao-compra">
          <label>
            <input type="radio" name="tipo-chapa-${index}" value="inteira" checked> Inteira
          </label>
          <label>
            <input type="radio" name="tipo-chapa-${index}" value="cortada"> Cortada
          </label>
          <input type="text" class="medidas" placeholder="Informe as medidas" style="display: none;">
        </div>

        <button class="btn-add-carrinho">Adicionar ao Carrinho</button>
      `;

      // Evento: mostra/esconde campo de medidas ao trocar opção
      const radios = card.querySelectorAll(`input[name="tipo-chapa-${index}"]`);
      const campoMedidas = card.querySelector('.medidas');
      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          campoMedidas.style.display = radio.value === 'cortada' ? 'block' : 'none';
        });
      });

      // Evento: botão adicionar ao carrinho
      const botao = card.querySelector('.btn-add-carrinho');
      botao.addEventListener('click', () => {
        const tipoSelecionado = card.querySelector(`input[name="tipo-chapa-${index}"]:checked`).value;
        const medidas = campoMedidas.value.trim();

        const medida = tipoSelecionado === 'cortada' ? medidas : '';
        adicionarAoCarrinho(produto, medida, tipoSelecionado);
        
        

        adicionarAoCarrinho(itemCarrinho); // função que você implementará em carrinho.js
      });

      container.appendChild(card);
    });

  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    container.innerHTML = '<p>Erro ao carregar produtos.</p>';
  }
});
