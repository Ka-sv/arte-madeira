let carrinho = [];

function adicionarAoCarrinho(produto, medida, tipo) {
  const item = {
    nome: produto.nome,
    preco: produto.preco,
    tipo: tipo,
    medida: medida || '',
    quantidade: 1
  };

  const existente = carrinho.find(p =>
    p.nome === item.nome &&
    p.tipo === item.tipo &&
    p.medida === item.medida
  );

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push(item);
  }

  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itensContainer = document.getElementById('itens-carrinho');
  const totalSpan = document.getElementById('total-carrinho');
  const contador = document.getElementById('contador-carrinho');
  itensContainer.innerHTML = '';

  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco * item.quantidade;

    const div = document.createElement('div');
    div.innerHTML = `
      <hr>
      <p><strong>${item.nome}</strong> (${item.tipo}) ${item.medida ? `<br>Medida: ${item.medida}` : ''}
        <br>Qtd: ${item.quantidade}
        <br>Preço: R$ ${(item.preco * item.quantidade).toFixed(2)}
      </p>
      <button onclick="alterarQuantidade(${index}, 1)">➕</button>
      <button onclick="alterarQuantidade(${index}, -1)">➖</button>
      <button onclick="removerItem(${index})">🗑️</button>
    `;
    itensContainer.appendChild(div);
  });

  totalSpan.textContent = total.toFixed(2);
  contador.textContent = carrinho.reduce((soma, p) => soma + p.quantidade, 0);
}

function alterarQuantidade(index, valor) {
  carrinho[index].quantidade += valor;
  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }
  atualizarCarrinho();
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function abrirCarrinho() {
  document.getElementById('modal-carrinho').style.display = 'block';
}

function fecharCarrinho() {
  document.getElementById('modal-carrinho').style.display = 'none';
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let mensagem = '*Pedido via site:*\n\n';
  carrinho.forEach(item => {
    mensagem += `• ${item.nome} (${item.tipo})`;
    if (item.medida) mensagem += `\n  Medidas: ${item.medida}`;
    mensagem += `\n  Qtd: ${item.quantidade}`;
    mensagem += `\n  Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}\n\n`;
  });

  const total = carrinho.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
  mensagem += `*Total: R$ ${total.toFixed(2)}*`;

  const numero = '5599999999999'; // Altere para o número da empresa
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
