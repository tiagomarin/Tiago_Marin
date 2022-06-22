const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const clsmodal = document.querySelector('#cls-modal');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

clsmodal.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  menuBtn.classList.remove('active');
});
