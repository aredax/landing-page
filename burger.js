const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger__list');

// Клик по кнопке бургера
burgerButton.addEventListener('click', toggleBurger);

function toggleBurger() {
  burgerMenu.classList.toggle('burger_block-none');
}