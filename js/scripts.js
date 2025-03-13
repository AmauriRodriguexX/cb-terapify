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




document.getElementById('cardsCarousel').addEventListener('slid.bs.carousel', function (event) {
  const items = this.querySelectorAll('.carousel-item');
  const activeIndex = [...items].indexOf(this.querySelector('.carousel-item.active'));
  const prevBtn = this.querySelector('.carousel-control-prev');
  const nextBtn = this.querySelector('.carousel-control-next');
  
  // Si estamos en el primer slide
  if (activeIndex === 0) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  // Si estamos en el último slide
  if (activeIndex === items.length - 1) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
});

// Función para cerrar el modal cuyo id se pasa como parámetro
function closeModal(modalId) {
  var modalEl = document.getElementById(modalId);
  // Obtiene o crea la instancia del modal con Bootstrap
  var modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.hide();
}



document.addEventListener('DOMContentLoaded', function () {
  var accordion = document.getElementById('accordionExample');

  // Al expandir un panel
  accordion.addEventListener('show.bs.collapse', function (e) {
    var toggleIcon = e.target.previousElementSibling.querySelector('.step-toggle-icon');
    if (toggleIcon) {
      toggleIcon.classList.add('rotated');
    }
  });

  // Al colapsar un panel
  accordion.addEventListener('hide.bs.collapse', function (e) {
    var toggleIcon = e.target.previousElementSibling.querySelector('.step-toggle-icon');
    if (toggleIcon) {
      toggleIcon.classList.remove('rotated');
    }
  });
});
