window.addEventListener('load', () => {
    setTimeout(() => {
      const botoes = document.getElementById('botoes-contato');
      if (botoes) {
        botoes.classList.add('mostrar');
      }
    }, 1000); 
  });
  