// form validation
document.querySelector('#submit').addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'email should be in lowercase';

    setTimeout(() => {
      error.innerHTML = '';
    },
    5000);
  }
});
