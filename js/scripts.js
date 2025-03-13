document.addEventListener("DOMContentLoaded", function () {
  function ajustarAlturaCards() {
      let cards = document.querySelectorAll(".card");
      let maxHeight = 0;

      // Resetear alturas antes de calcular
      cards.forEach(card => {
          card.style.height = "auto";
      });

      // Encontrar la mayor altura
      cards.forEach(card => {
          if (card.offsetHeight > maxHeight) {
              maxHeight = card.offsetHeight;
          }
      });

      // Aplicar la mayor altura a todas las cards
      cards.forEach(card => {
          card.style.height = maxHeight + "px";
      });
  }

  // Ejecutar la función al cargar la página y cuando la ventana cambie de tamaño
  ajustarAlturaCards();
  window.addEventListener("resize", ajustarAlturaCards);
});


document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('cardsCarousel');
  if (!carousel) return;
  
  // Seleccionamos los botones (suponiendo que están en el documento)
  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');

  // Función que actualiza el estilo de los botones según el slide activo
  function updateButtons() {
    const items = carousel.querySelectorAll('.carousel-item');
    const activeSlide = carousel.querySelector('.carousel-item.active');
    const activeIndex = Array.from(items).indexOf(activeSlide);

    // Para el botón Prev:
    if (activeIndex === 0) {
      // Deshabilitado
      prevBtn.style.backgroundColor = "#D8DADA";
      prevBtn.style.color = "#5E6A71";
      prevBtn.style.pointerEvents = "none";
      prevBtn.style.opacity = "0.5";
    } else {
      // Activo
      prevBtn.style.backgroundColor = "#CE0058";
      prevBtn.style.color = "#FFFFFF";
      prevBtn.style.pointerEvents = "auto";
      prevBtn.style.opacity = "1";
    }

    // Para el botón Next:
    if (activeIndex === items.length - 1) {
      // Deshabilitado
      nextBtn.style.backgroundColor = "#D8DADA";
      nextBtn.style.color = "#5E6A71";
      nextBtn.style.pointerEvents = "none";
      nextBtn.style.opacity = "0.5";
    } else {
      // Activo
      nextBtn.style.backgroundColor = "#CE0058";
      nextBtn.style.color = "#FFFFFF";
      nextBtn.style.pointerEvents = "auto";
      nextBtn.style.opacity = "1";
    }
  }

  // Actualizamos al cargar la página
  updateButtons();

  // Actualizamos cuando se cambia de slide (evento de Bootstrap)
  carousel.addEventListener('slid.bs.carousel', updateButtons);
});

