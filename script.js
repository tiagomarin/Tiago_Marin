let button = document.querySelectorAll('.orangeBtn');
let details = document.querySelectorAll('.details');

function displayBlock(element){
  element.classList.add('display-block')
}
button.addEventListener('click', displayBlock(details))


