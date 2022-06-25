const form = document.getElementById('form');
const emailElement = document.getElementById('email');
console.log(emailElement.value);


const checkEmail = () => {
  let valid = false;
  const email = emailElement.value.trim();
  const errorMsg = document.getElementById('error-msg');

  console.log(email.value);
  if (!isRequired(email)) {
    // showError(emailElement, 'Email cannot be blank. Message not sent');
    errorMsg.innerText = 'Email cannot be blank. Message not sent';
  } else if (!isEmailValid(email)) {
    // showError(emailElement, "The adreess format isn't valid. Message not sent")
    errorMsg.innerText = "The adreess format isn't valid. Message not sent";
  } else if (isLower() = false){
    // showError(emailElement, 'Upper case letters are not accepted. Message not sent')
    errorMsg.innerText = 'Upper case letters are not accepted. Message not sent';
  } else {
    valid = true;
    errorMsg.innerText = '';
  }
  return valid;
};

const isRequired = value => value === '' ? false : true; //if is blank retur false

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
function isLower(email){
  const email = emailElement.value.trim();
  console.log(email);
  const lowerEmail = email.toLowerCase();
  console.log(lowerEmail);
  if (lowerEmail === email){
    return true;
  } else {
    return false;
  }
}
console.log(
());


form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let emailValue = document.querySelector('#email').value

  // validate fields
  checkEmail(emailValue);
  // submit to the server if the form is valid
  if (checkEmail) {
    console.log(emailValue)
    form.submit
  } else  {
    console.log(emailValue)
  }
});
// const showError = (input, message) => {
//   // get the form-field element
//   const formField = input.parentElement;
//   // add the error class
//   formField.classList.remove('success');
//   formField.classList.add('error');

//   // show the error message
//   const error = formField.querySelector('small'); //get the <small>
//   error.textContent = message;
// };

// const showSuccess = (input) => {
//   // get the form-field element
//   const formField = input.parentElement;

//   // remove the error class
//   formField.classList.remove('error');
//   formField.classList.add('success');

//   // hide the error message
//   const error = formField.querySelector('small');
//   error.textContent = '';
// }

