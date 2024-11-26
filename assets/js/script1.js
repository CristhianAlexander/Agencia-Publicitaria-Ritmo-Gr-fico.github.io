// JavaScript para el carrusel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

function showItem(index) {
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showItem(index);
  });
});

// Mueve el carrusel automáticamente cada 3 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}, 3000);

// Inicializa el carrusel mostrando el primer item
showItem(currentIndex);
