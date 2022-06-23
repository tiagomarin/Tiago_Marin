// const menuBtn = document.querySelector('.hamburger');
// const mobileMenu = document.querySelector('.mobile-menu');
// const clsmodal = document.querySelector('#cls-modal');

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.add('active');
//   mobileMenu.classList.add('active');
// });

// clsmodal.addEventListener('click', () => {
//   mobileMenu.classList.remove('active');
//   menuBtn.classList.remove('active');
// });

const modalBtn = document.querySelector('#modalBtn');
const modalContainer = document.querySelector('.modal-container');

modalBtn.addEventListener('click', () => {
  modalContainer.classList.add('display-flex');
});