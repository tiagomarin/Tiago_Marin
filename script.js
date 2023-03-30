const recentWorks = document.querySelector('#recent-works');

// function cardsSection (portifolio)
const portifolio = [
  {
    id: 0,
    headingMobile: 'Shoe Store',
    headingDesktop: 'Shoe Store',
    highlight: 'A marketplace for shoes. Users can create an account, add items to their cart, and purchase them. There is also a seller dashboard where they can add new items to the store, select iconic products to display in home page, manage promo codes, orders and much more.',
    highlightDetails: 'A marketplace for shoes. Users can create an account, add items to their cart, and purchase them. There is also a seller dashboard where they can add new items to the store, select iconic products to display in home page, manage promo codes, orders and much more. Fully built with Ruby on Rails and plain CSS (following BEM), using Amazon S3 for image storage, turbo rails for the instant search bar and filters.',
    image: 'assets/shoestore.png',
    badge1: 'ruby',
    badge2: 'rails',
    badge3: 'Amazon S3',
    seeLive: 'https://vt-shoe-store.herokuapp.com/',
    seeSrc: 'https://github.com/VitorGuedesMadeira/Shoes-Store',
  },
  {
    id: 1,
    headingMobile: 'British Classic Meals',
    headingDesktop: 'British Classic Meals',
    highlight: 'The British Classic Meals is a seclection of the most favorite and famous british recipes.',
    highlightDetails: 'The British Classic Meals is a seclection of the most favorite and famous british recipes. Things you can do in this website: check the list of meals, like the recipe, view the complete recipe including list of ingredients, view comments of other users, leave your comment about the meal. Check it out! What is your favorite from the list? Or which one would you choose to eat now if you could?',
    image: 'assets/snapshot-britishmeals.png',
    badge1: 'css',
    badge2: 'html',
    badge3: 'JavaScript',
    seeLive: 'https://tiagomarin.github.io/British-Classic-Meals/',
    seeSrc: 'https://github.com/tiagomarin/British-Classic-Meals',
  },
  {
    id: 2,
    headingMobile: 'Eagle English',
    headingDesktop: 'Eagle English',
    highlight: 'This is a prototype for an English school company. Built to practice my skills in HTML CSS and JavaScript, mainly regarding responsiveness.',
    highlightDetails: "This project was designed to test some of the abilities I learned in the first module (5 weeks) of the Microverse program, such as HTML, CSS, JavaScript and Communication, mainly regarding responsiveness. It's a prototype landing page for an English School where you can find some basic information about the course and a little about the teachers.",
    image: 'assets/eagle-english.png',
    badge1: 'scss',
    badge2: 'html',
    badge3: 'JavaScript',
    seeLive: 'https://tiagomarin.github.io/Eagle-English/',
    seeSrc: 'https://github.com/Tiago-Lelinski-Marin/Eagle-English',
  },
  {
    id: 3,
    headingMobile: 'Leaderboard',
    headingDesktop: 'Leaderboard',
    highlight: 'Keep scores of a game by adding new entries and having an updated ordered rank. API stored information.',
    highlightDetails: "With the Leaderboard website the user can keep scores of a game by adding new entries and having an updated ordered rank. Once the score is submitted you can't remove it. However you can start a new leaderboard (or game) and store new scores from scratch. All data is preserved thanks to the external Leaderboard API service. This is a project for learning purposes which I'll practice medium-fidelity wireframes to create a UI.",
    image: 'assets/snapshot-leaderboard.png',
    badge1: 'css',
    badge2: 'html',
    badge3: 'JavaScript',
    seeLive: 'https://tiagomarin.github.io/Leaderboard/',
    seeSrc: 'https://github.com/tiagomarin/Leaderboard',
  },
  {
    id: 4,
    headingMobile: 'BrewDog Beer Guide ',
    headingDesktop: 'BrewDog Beer Guide ',
    highlight: 'The BrewDog Beer Guide is a web application for beer lovers, in particular those who like the BrewDog brewery.',
    highlightDetails: 'The BrewDog Beer Guide is a web application for beer lovers, in particular those who like the BrewDog brewery. Here you filter the beers according to their bitterness level and also you can find more details about the beers of that company.',
    image: 'assets/snapshot-brewdog.png',
    badge1: 'React',
    badge2: 'Redux',
    badge3: 'JavaScript',
    seeLive: 'https://brewdog-beer-guide.netlify.app/',
    seeSrc: 'https://github.com/tiagomarin/Brewdog-Beer-Guide',
  },
  {
    id: 5,
    headingMobile: 'Bookstore',
    headingDesktop: 'Bookstore',
    highlight: 'A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: "Bookstore is a website for all reading fans. It is a Single Page App (SPA) that allows users to: display a list of books, add books to the list, remove books from the list. It is part of my journey at Microverse, that's my first React Redux based project.",
    image: 'assets/bookstore.png',
    badge1: 'React',
    badge2: 'Redux',
    badge3: 'Javascript',
    seeLive: 'https://bookstore-tm.netlify.app/',
    seeSrc: 'https://github.com/tiagomarin/Bookstore',
  },
  {
    id: 6,
    headingMobile: 'Math-Magicians',
    headingDesktop: 'Math-Magicians',
    highlight: 'Math magicians is a Single Page App (SPA) for all fans of mathematics. Make simple calculations or read a random math-related quote.',
    highlightDetails: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote. It took aproximately 1 week between studying and doing it. This applicatino has 3 pages: Home Page, Calculator Page and a Quote page. To build this app these React features were used: Functional components | Hooks | Router | Jest for testing',
    image: 'assets/math-magicians.png',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://titos-calculator.netlify.app/',
    seeSrc: 'https://github.com/tiagomarin/Math-Magicians',
  },
  {
    id: 7,
    headingMobile: 'Geek The Blog',
    headingDesktop: 'Geek The Blog',
    highlight: '6 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails: 'Highligh 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'assets/project6.jpeg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    seeLive: 'https://github.com/tiagomarin/Geek-The-Blog',
    seeSrc: 'https://github.com/tiagomarin/Geek-The-Blog',
  },
  {
    id: 8,
    headingMobile: 'My Budget',
    headingDesktop: 'My Budget',
    highlight: 'MyBudget is app where you can keep record of all your expenses and nest them into categories this way you can control your finances better and plan better to accomplish your goals.',
    highlightDetails: 'MyBudget is app where you can keep record of all your expenses and nest them into categories this way you can control your finances better and plan better to accomplish your goals. Build with Ruby on Rails with CRUD methods and authentication. This was the beginning of my journey with Ruby on Rails.',
    image: 'assets/snapshot-bookstore.png',
    badge1: 'React',
    badge2: 'Redux',
    badge3: 'Javascript',
    seeLive: 'https://www.loom.com/share/42198050d5d44978aa9550f31b360f73',
    seeSrc: 'https://github.com/tiagomarin/MyBudget',
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
h3.innerText = portifolio[0].headingMobile;
divWrap.appendChild(h3);
// create card text
let p = document.createElement('p');
p.id = 'featured-p';
p.innerText = portifolio[0].highlight;
divWrap.appendChild(p);
// create the div of badges
let div = document.createElement('div');
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
// create the button see project
let button = document.createElement('button');
button.id = 'see-feat';
button.classList = 'small-button see-project';
button.innerHTML = 'See Project';
divWrap.appendChild(button);

// -----------------------
// loop to create the STANDARD cards
// ----------------------
for (let i = 1; i < 7; i += 1) {
  // create STANDARD cards
  article = document.createElement('article');
  article.classList = `card card${i}`;
  recentWorks.appendChild(article);

  // create div
  divWrap = document.createElement('div');
  divWrap.classList = 'wrap-card';
  article.appendChild(divWrap);

  // create title of card
  h3 = document.createElement('h3');
  h3.classList = 'card-h';
  h3.innerHTML = portifolio[i].headingMobile;
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
  article.appendChild(div);
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

// // fill modal
function fillModal(i) {
  // create full screen container
  const divContModal = document.createElement('div');
  divContModal.classList = 'modal-container';
  recentWorks.appendChild(divContModal);

  // create modal
  const divModal = document.createElement('div');
  divModal.classList = 'details';
  divContModal.appendChild(divModal);

  // create div for title and close button
  const divTop = document.createElement('div');
  divTop.classList = 'modal-top';
  divModal.appendChild(divTop);

  // create title of modal MOBILE
  h3 = document.createElement('h3');
  h3.classList = 'details-title h-mobile';
  h3.innerHTML = portifolio[i].headingMobile;
  divTop.appendChild(h3);
  // create title of card DESKTOP
  h3 = document.createElement('h3');
  h3.classList = 'details-title h-desktop details-h3';
  h3.innerHTML = portifolio[i].headingDesktop;
  divTop.appendChild(h3);

  // create x button
  const xBtn = document.createElement('div');
  xBtn.innerHTML = '<i id="xBtn" class="fa-solid fa-xmark"></i>';
  divTop.appendChild(xBtn);

  // create div for language Badges
  const divBadges = document.createElement('div');
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

  // div for main part modal
  const divMain = document.createElement('div');
  divMain.classList = 'modal-main';
  divModal.appendChild(divMain);

  // create img of modal
  img = document.createElement('img');
  img.classList = 'details-img';
  img.src = (portifolio[i].image);
  divMain.appendChild(img);

  // div for text and buttons
  const divBottom = document.createElement('div');
  divBottom.classList = 'modal-bottom';
  divMain.appendChild(divBottom);

  // create p
  p = document.createElement('p');
  p.classList = 'card-p details-p';
  p.innerText = portifolio[i].highlightDetails;
  divBottom.appendChild(p);

  // create div to buttons
  const divBtns = document.createElement('div');
  divBtns.classList = 'details-btns-container';
  divBottom.appendChild(divBtns);

  // create buttons
  // see-live button
  let anchor = document.createElement('a');
  anchor.id = `see-live${1}`;
  anchor.href = portifolio[i].seeLive;
  anchor.target = '_blank';
  divBtns.appendChild(anchor);

  button = document.createElement('button');
  button.classList = 'small-button see-project';
  button.innerHTML = 'See Live &nbsp; <i class="fa-solid fa-arrow-up-right-from-square -flip-horizontal"></i>';
  anchor.appendChild(button);

  // see source button
  anchor = document.createElement('a');
  anchor.id = `source${1}`;
  anchor.href = portifolio[i].seeSrc;
  anchor.target = '_blank';
  divBtns.appendChild(anchor);

  button = document.createElement('button');

  button.classList = 'small-button see-project';
  button.innerHTML = 'See Source &nbsp;<i class="fa-brands fa-github"></i>';
  anchor.appendChild(button);
}

// --------  BUTTONS  FUNCTIONALITY  ----------------
// --------------------------------------------------

// variables for menu button
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const clsmodal = document.querySelector('#cls-modal');

// open menu mobile
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

const modalBtnFeat = document.querySelector('#see-feat');
modalBtnFeat.addEventListener('click', () => {
  // clearModal();
  fillModal(0);
});

const modal1Btn = document.querySelector('#see-project1');
modal1Btn.addEventListener('click', () => {
  // clearModal();
  fillModal(1);
});

const modal2Btn = document.querySelector('#see-project2');
modal2Btn.addEventListener('click', () => {
  // clearModal();
  fillModal(2);
});

const modal3Btn = document.querySelector('#see-project3');
modal3Btn.addEventListener('click', () => {
  // clearModal();
  fillModal(3);
});

const modal4Btn = document.querySelector('#see-project4');
modal4Btn.addEventListener('click', () => {
  // clearModal();
  fillModal(4);
});

const modal5Btn = document.querySelector('#see-project5');
modal5Btn.addEventListener('click', () => {
  // clearModal();
  fillModal(5);
});

const modal6Btn = document.querySelector('#see-project6');
modal6Btn.addEventListener('click', () => {
  // clearModal();
  fillModal(6);
});

// close details MODAL

// attempt with window and xBtn

window.addEventListener('click', (e) => {
  const modalContainer = document.querySelector('.modal-container');
  const xBtn = document.querySelector('#xBtn');
  if (e.target === modalContainer || e.target === xBtn) {
    // remove container of details pop up
    const portfolioGrid = document.querySelector('#recent-works');
    portfolioGrid.removeChild(modalContainer);
  }
});