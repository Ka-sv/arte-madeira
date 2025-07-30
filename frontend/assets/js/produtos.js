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
          
          <div class="medidas-container" style="display: none;">
            <div class="medida-linha">
              <input type="number" class="input-comp" placeholder="Comprimento (mm)">
              <input type="number" class="input-larg" placeholder="Largura (mm)">
              <input type="number" class="input-qtd" placeholder="Qtd">
            </div>
              <button type="button" class="add-medida">+ Adicionar Medida</button>
            </div>

        </div>

        <button class="btn-add-carrinho">Adicionar ao Carrinho</button>
      `;

      // Evento: mostra/esconde campo de medidas ao trocar opção
      const radios = card.querySelectorAll(`input[name="tipo-chapa-${index}"]`);
      const medidasContainer = card.querySelector('.medidas-container');
      const botaoAddMedida = card.querySelector('.add-medida');

      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          medidasContainer.style.display = radio.value === 'cortada' ? 'block' : 'none';
        });
      });

      botaoAddMedida.addEventListener('click', () => {
        const novaLinha = document.createElement('div');
        novaLinha.className = 'medida-linha';
        novaLinha.innerHTML = `
          <input type="number" class="input-comp" placeholder="Comprimento (mm)">
          <input type="number" class="input-larg" placeholder="Largura (mm)">
          <input type="number" class="input-qtd" placeholder="Qtd">
          <button type="button" class="remover-medida" title="Remover medida">🗑️</button>
        `;
        medidasContainer.insertBefore(novaLinha, botaoAddMedida);
      
        // Ativa o botão de remover
        const botaoRemover = novaLinha.querySelector('.remover-medida');
        botaoRemover.addEventListener('click', () => {
          novaLinha.remove();
        });
      });
      
      // Evento: botão adicionar ao carrinho
      const botao = card.querySelector('.btn-add-carrinho');
      botao.addEventListener('click', () => {
        const tipoSelecionado = card.querySelector(`input[name="tipo-chapa-${index}"]:checked`).value;
        
        let medidas = [];
          if (tipoSelecionado === 'cortada') {
            const linhas = card.querySelectorAll('.medida-linha');
            linhas.forEach(linha => {
              const comp = linha.querySelector('.input-comp')?.value;
              const larg = linha.querySelector('.input-larg')?.value;
              const qtd = linha.querySelector('.input-qtd')?.value;
              if (comp && larg && qtd) {
                medidas.push(`${comp}x${larg} = ${qtd}`);
              }
            });
          }

        
          adicionarAoCarrinho(produto, medidas.join(', '), tipoSelecionado);


      });

      container.appendChild(card);
    });

  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    container.innerHTML = '<p>Erro ao carregar produtos.</p>';
  }
});
