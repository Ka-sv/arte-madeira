document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  const carrossel = document.getElementById('carrossel');

  if (!carrossel) return;

  const totalSlides = carrossel.children.length;

  function mudarSlide(direcao) {
    slideIndex = (slideIndex + direcao + totalSlides) % totalSlides;
    atualizarCarrossel();
  }

  function atualizarCarrossel() {
    carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  window.mudarSlide = mudarSlide;
  setInterval(() => mudarSlide(1), 6000);
});
