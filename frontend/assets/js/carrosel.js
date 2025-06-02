document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const carrossel = document.getElementById('carrossel');
    const totalSlides = carrossel.children.length;
  
    function mudarSlide(direcao) {
      slideIndex = (slideIndex + direcao + totalSlides) % totalSlides;
      atualizarCarrossel();
    }
  
    function atualizarCarrossel() {
      carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  
    // Torna a função global para uso no HTML
    window.mudarSlide = mudarSlide;
  
    // Avanço automático
    setInterval(() => mudarSlide(1), 6000);
  });
  