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

const seeProject = document.querySelector('#details2');
const details = document.querySelector('.wrap-details');

seeProject.addEventListener('click', () => {
  details.classList.add('display-flex');
});