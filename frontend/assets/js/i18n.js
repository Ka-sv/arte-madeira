let idioma = 'pt';

function trocarIdioma() {
  idioma = idioma === 'pt' ? 'zh' : 'pt';
  atualizarTexto();
}

function atualizarTexto() {
  document.querySelector('h2').textContent = idioma === 'pt'
    ? 'Bem-vindo à Arte Madeira do China'
    : '欢迎来到中国木艺';

  document.querySelector('p').textContent = idioma === 'pt'
    ? 'Especialistas em MDF e móveis planejados.'
    : '专业销售MDF和定制家具。';
}
