// Anima os cartões quando entram no viewport
// Usando Intersection Observer

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    document
      .querySelectorAll(".service-card")
      .forEach((card) => observer.observe(card));
  });
  