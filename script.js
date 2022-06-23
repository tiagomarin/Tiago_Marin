
const recentWorks = document.querySelector('#recent-works');

// function cardsSection (portifolio)
const portifolio = [
  {
    id: 0,
    heading: 'title of Featured card',
    highlight: "0 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    highlightDetails: `Highligh Featured is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five, but also the leap into electronic typesetting, remaining essent`,
    image: 'assets/project-featured.jpg',
    imageDetails: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    badge4: 'Ruby',
    seeLive: 'https://tiago-lelinski-marin.github.io/myPortfolio/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/myPortfolio',
  },
  {
    id: 1,
    heading: 'title of card 1',
    highlight: '1 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: `Highligh 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: 'assets/project1-web.jpg',
    imageDetails: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://tiago-lelinski-marin.github.io/myPortfolio/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/myPortfolio',
  },
  {
    id: 2,
    heading: 'title of card 2',
    highlight: '2 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: `Highligh 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: 'assets\project2.jpg',
    imageDetails: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://tiago-lelinski-marin.github.io/myPortfolio/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/myPortfolio',
  },
  {
    id: 3,
    heading: 'title of card 3',
    highlight: '3 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: `Highligh 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: 'assets\project3.jpg',
    imageDetails: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://tiago-lelinski-marin.github.io/myPortfolio/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/myPortfolio',
  },
  {
    id: 4,
    heading: 'title of card 4',
    highlight: '4 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: `Highligh 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: 'assets\project4.jpg',
    imageDetails: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://tiago-lelinski-marin.github.io/myPortfolio/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/myPortfolio',
  },
  {
    id: 5,
    heading: 'title of card 5',
    highlight: '5 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: `Highligh 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: 'assets\project5.jpg',
    imageDetails: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://tiago-lelinski-marin.github.io/myPortfolio/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/myPortfolio',
  },
  {
    id: 6,
    heading: 'title of card 6',
    highlight: '6 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: `Highligh 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: 'assets\project6.jpg',
    imageDetails: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://tiago-lelinski-marin.github.io/myPortfolio/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/myPortfolio',
  },
];

// -------------------
// create featured card
let article = document.createElement('article');
article.classList = 'featured';
recentWorks.appendChild(article);

// create img of card
let img = document.createElement('img');
img.src = (portifolio[0].image);
article.appendChild(img);

// create card wrap
let divWrap = document.createElement('div');
divWrap.classList = 'wrap-featured';
article.appendChild(divWrap);

// create title of card
let h3 = document.createElement('h3');
h3.classList = 'card-h';
h3.innerText = portifolio[0].heading;
divWrap.appendChild(h3);

// create card text
let p = document.createElement('p');
p.id = 'featured-p';
p.innerText = portifolio[0].highlight;
divWrap.appendChild(p);

// create the div of badges
div = document.createElement('div');
div.classList = 'lang';
divWrap.appendChild(div);

// add ul of badges
let ul = document.createElement('ul');
div.appendChild(ul);

// create badge items

let li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
let badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge1;
li.appendChild(badge);

li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge2;
li.appendChild(badge);

li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge3;
li.appendChild(badge);

li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge4;
li.appendChild(badge);

// create the button see project
button = document.createElement('button');
button.id = "see-feat";
button.classList = 'small-button see-project';
button.innerHTML = 'See Project';
divWrap.appendChild(button);

// -----------------------
// loop to create the STANDARD cards
// ----------------------
for (i = 1; i < 7; i++) {

  // create STANDARD cards
  article = document.createElement('article');
  article.classList = `card${i}`;
  recentWorks.appendChild(article);

  // create div
  divWrap = document.createElement('div');
  divWrap.classList = 'wrap-card';
  article.appendChild(divWrap);

  // create title of card
  h3 = document.createElement('h3');
  h3.classList = 'card-h';
  h3.innerHTML = portifolio[i].heading;
  divWrap.appendChild(h3);

  // create p
  p = document.createElement('p');
  p.classList = 'card-p';
  p.innerText = portifolio[i].highlight;
  divWrap.appendChild(p);

  // create div
  div = document.createElement('div');
  div.classList = 'lang';
  divWrap.appendChild(div);

  // create ul
  ul = document.createElement('ul');
  div.appendChild(ul);

  // create li-items
  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);

  // create badge items
  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  badge = document.createElement('div');
  badge.classList = 'badge';
  badge.innerHTML = portifolio[i].badge1;
  li.appendChild(badge);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  badge = document.createElement('div');
  badge.classList = 'badge';
  badge.innerHTML = portifolio[i].badge2;
  li.appendChild(badge);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  badge = document.createElement('div');
  badge.classList = 'badge';
  badge.innerHTML = portifolio[i].badge3;
  li.appendChild(badge);

  // create the button see project
  div = document.createElement('div');
  div.classList = 'card-link';
  divWrap.appendChild(div);
  button = document.createElement('button');
  button.id = `see-project${i}`;
  button.classList = 'see-project';
  button.innerText = 'See Project';


  div.appendChild(button);
}
// fim do loop



// -------------------
// create Details pop up
// -------------------

// clear modal
function clearModal(project) {
  const modalClear = document.querySelector('.details');
  modalContainer.removeChild(modalClear);
}

// // fill modal
function fillModal(i) {

  // create full screen container
  let divContModal = document.createElement('div');
  divContModal.classList = 'modal-container';
  recentWorks.appendChild(divContModal);

  // create modal 
  let divModal = document.createElement('div');
  divModal.classList = 'details';
  divContModal.appendChild(divModal);

  // create title of card
  h2 = document.createElement('h3');
  h2.classList = 'details-title';
  h2.innerHTML = portifolio[i].heading;
  divModal.appendChild(h2);

  // create div for language Badges 
  let divBadges = document.createElement('div');
  divBadges.classList = 'lang';
  divModal.appendChild(divBadges);

  // create ul
  ul = document.createElement('ul');
  divBadges.appendChild(ul);


  // create each badge items

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  div = document.createElement('div');
  div.classList = 'badge';
  div.innerHTML = portifolio[i].badge1;
  li.appendChild(div);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  div = document.createElement('div');
  div.classList = 'badge';
  div.innerHTML = portifolio[i].badge2;
  li.appendChild(div);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  div = document.createElement('div');
  div.classList = 'badge';
  div.innerHTML = portifolio[i].badge3;
  li.appendChild(div);

  // create img of card
  img = document.createElement('img');
  img.src = (portifolio[i].imageDetails);
  divModal.appendChild(img);

  // create p
  p = document.createElement('p');
  p.classList = 'card-p';
  p.innerText = portifolio[i].highlightDetails;
  divModal.appendChild(p);

  // create div to buttons
  let divBtns = document.createElement('div');
  divBtns.classList = 'details-btns-container';
  divModal.appendChild(divBtns);


  // create buttons
  // see-live button
  let anchor = document.createElement('a');
  anchor.id = `see-live${i}`;
  anchor.setAttribute = ('href', portifolio[i].seeLive);
  anchor.setAttribute = ('target', '_blank');
  divBtns.appendChild(anchor);

  button = document.createElement('button');
  button.classList = 'small-button see-project';
  button.innerHtml = 'See Live <i class="fa-solid fa-arrow-up-right-from-square fa-flip-horizontal"></i>';
  anchor.appendChild(button);

  // see source button
  anchor = document.createElement('a');
  anchor.id = `source${i}`;
  anchor.setAttribute = ('href', portifolio[i].seeSrc);
  anchor.setAttribute = ('target', '_blank');
  divBtns.appendChild(anchor);

  button = document.createElement('button');
  
  button.classList = 'small-button see-project';
  button.innerHtml = 'See Source <i class="fa-brands fa-github"></i>';
  anchor.appendChild(button);
}

// variables for see-live and source buttons
const modalContainer = document.querySelector('.modal-container');
const seeLiveBtn = document.querySelector(`#see-live${portifolio[X].seeLive}`); //fetch <a id="see-live XX "
const sourceBtn = document.querySelector(`#source${portifolio[X].seeSrc}`); //fetch <a id="see-source XX "



// ----------------------------
// buttons funcionallity
// ----------------------------

//variables for menu button
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const clsmodal = document.querySelector('#cls-modal');

//open menu mobile
menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('active');
  mobileMenu.classList.add('active');
});

// close menu mobile
clsmodal.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  menuBtn.classList.remove('active');
});

// ------ MODAL---------
// open details MODAL
let iModal = document.querySelector(`#`)
const modalBtn = document.querySelector(iModal);

modalBtn.addEventListener('click', () => {
  // clearModal();
  // fillModal(1);
  modalContainer.classList.add('display-flex');
});

// close details MODAL
window.addEventListener('click', (e) => {
  if (e.target === modalContainer || e.target === seeLiveBtn || e.target === sourceBtn) {
    modalContainer.classList.remove('display-flex');
  }
});

// // many buttons onpen modal
// window.addEventListener('click', (event) => {
//   const buttonId = event.target.id;
//   if (event.target.classList.contains('see-project')) {
//     clearModal("details");
//     fillDetailsModal(buttonId);
//     newModal.classList.add('display-flex');
//   }
// })

