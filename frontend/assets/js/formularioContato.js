document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
  
        const numeroWhatsApp = "5511965779827"; 
  
        const texto = `Olá, me chamo ${nome}!%0AEmail: ${email}%0AMensagem: ${mensagem}`;
  
        const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
  
        window.open(url, "_blank");
      });
    }
  });
  