const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const clsModal = document.querySelector('#clsModal');

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
})

document.querySelectorAll('nav-links').forEach(m => m.addEventListener('click', () => {
  clsModal.classList.remove("active");
}));


/*
const seeProjectBtn = document.querySelectorAll('.see-project');
// const clsMenuBtn = document.querySelectorAll('');
const detailsModal = document.querySelectorAll('.card1 .details');
const body = document.body;

seeProjectBtn.addEventListener('click',function() {
  detailsModal.classList.add('display-block');
  body.classList.add('modal-on')
});

// clsMenuBtn.addEventListener('click', function() {
//   mobMenu.classList.remove('display-block');
//   body.classList.remove('modal-on')
// });
*/
