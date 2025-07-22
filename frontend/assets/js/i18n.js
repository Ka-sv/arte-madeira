const traducoes = {
  pt: {
    // index.html
    "titulo-site": "Arte Madeira do China",
    "nav-inicio": "Início",
    "nav-produtos": "Produtos",
    "nav-contato": "Contato",
    "nav-servico": "Serviços", 
    "banner-titulo": "Bem-vindo à Arte Madeira do China",
    "banner-descricao": "Especialistas em MDF e móveis planejados.",
    "destaques-titulo": "Máquinas modernas e equipamentos de primeira qualidade.",
    "legenda1": "Painel de Controle CNC",
    "legenda2": "Máquina Canaletadora CNC",
    "legenda3": "Seccionadora Vertical Compacta",
    "sobre-titulo": "Sobre a Arte Madeira do China",
    "sobre-texto": "Somos uma empresa especializada em MDF e móveis planejados, prezando sempre pela qualidade, inovação e compromisso com nossos clientes.",
    "missao-titulo": "Missão",
    "missao-texto": "Entregar soluções sob medida com excelência em acabamento e agilidade na entrega.",
    "valores-titulo": "Valores",
    "valor1": "Comprometimento",
    "valor2": "Transparência",
    "valor3": "Qualidade no atendimento",
    "valor4": "Inovação constante",

    // carrinho
    "titulo-carrinho": "Seu Carrinho",
    "botao-finalizar": "Finalizar Compra via WhatsApp",
    "rodape-contato": "Contato: artemadeiradong@gmail.com",

    // produtos.html
    "titulo-produtos": "Todos os Produtos",
    "titulo-catalogos": "Catálogos de Fornecedores",
    "titulo-catalogo-eucatex": "Coleção Origens MDF 2025 - Eucatex",
    "descricao-catalogo": "Veja as opções de padrões e acabamentos da nova linha Eucatex.",
    "btn-ver-catalogo": "📖 Visualizar Catálogo",

    "titulo-catalogo-sudati": "Catálogo MDF Sudati - Edição 8",
    "descricao-catalogo-sudati": "Confira os lançamentos e padrões da linha Sudati 2024.",
    "btn-ver-catalogo-sudati": "📖 Visualizar Catálogo",


    // contato.html
    "titulo-fale": "Fale Conosco",
    "label-nome": "Nome:",
    "label-email": "Email:",
    "label-mensagem": "Mensagem:",
    "botao-enviar": "Enviar mensagem",
    "titulo-equipe": "Nossa Equipe",
    "descricao-equipe": "Trabalhamos com profissionais experientes que cuidam de cada detalhe com dedicação e excelência.",
    "compromisso-equipe": "Nosso compromisso é oferecer resultados com qualidade, pontualidade e respeito ao seu projeto."
  },
  zh: {
    // index.html
    "titulo-site": "中国木艺",
    "nav-inicio": "首页",
    "nav-produtos": "产品",
    "nav-contato": "联系",
    "nav-servico": "服務",
    "banner-titulo": "欢迎来到中国木艺",
    "banner-descricao": "专业 MDF 和定制家具。",
    "destaques-titulo": "现代机器与高品质设备。",
    "legenda1": "数控控制面板",
    "legenda2": "数控开槽机",
    "legenda3": "垂直切割机",
    "sobre-titulo": "关于中国木艺",
    "sobre-texto": "我们专注于 MDF 和定制家具，注重质量、创新和客户承诺。",
    "missao-titulo": "使命",
    "missao-texto": "提供量身定制的解决方案，工艺精湛，交货迅速。",
    "valores-titulo": "价值观",
    "valor1": "承诺",
    "valor2": "透明度",
    "valor3": "优质服务",
    "valor4": "持续创新",

    // carrinho
    "titulo-carrinho": "您的购物车",
    "botao-finalizar": "通过 WhatsApp 完成购买",
    "rodape-contato": "联系：artemadeiradong@gmail.com",

    // produtos.html
    "titulo-produtos": "所有产品",
    "titulo-catalogos": "供应商目录",
    "titulo-catalogo-eucatex": "2025 年 Eucatex 原木系列",
    "descricao-catalogo": "查看 Eucatex 新系列的图案和饰面选项。",
    "btn-ver-catalogo": "📖 查看目录",
    "titulo-catalogo-sudati": "Sudati MDF 目录 - 第 8 版",
    "descricao-catalogo-sudati": "查看 Sudati 2024 年系列的新品和图案。",
    "btn-ver-catalogo-sudati": "📖 查看目录",


    // contato.html
    "titulo-fale": "联系我们",
    "label-nome": "姓名：",
    "label-email": "电子邮件：",
    "label-mensagem": "留言：",
    "botao-enviar": "发送消息",
    "titulo-equipe": "我们的团队",
    "descricao-equipe": "我们拥有经验丰富的专业人员，专注于每一个细节，精益求精。",
    "compromisso-equipe": "我们的承诺是为您的项目提供高质量、准时和尊重的成果。"
  }
};

function trocarIdioma(idioma) {
  const elementos = document.querySelectorAll("[id]");
  elementos.forEach(el => {
    const chave = el.id;
    if (traducoes[idioma] && traducoes[idioma][chave]) {
      el.textContent = traducoes[idioma][chave];
    }
  });
  localStorage.setItem("idiomaSelecionado", idioma);
}



window.addEventListener("DOMContentLoaded", () => {
  let idioma = localStorage.getItem("idiomaSelecionado");

  if (!idioma) {
    const navegador = navigator.language || navigator.userLanguage;
    idioma = navegador.startsWith("zh") ? "zh" : "pt";
  }

  const seletor = document.getElementById("lang");
  if (seletor) {
    seletor.value = idioma;
    seletor.addEventListener("change", (e) => {
      trocarIdioma(e.target.value);
    });
  }

  trocarIdioma(idioma);
});
