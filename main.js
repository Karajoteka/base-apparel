const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const errorMsg = document.querySelector('.error-message');
const errorIcon = document.querySelector('.error-icon');

submit.addEventListener('click', validateEmail);

function validateEmail() {
  const email = input.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (!regex.test(email)) {
    errorMsg.classList.remove('inactive');
    errorIcon.classList.remove('inactive');
    input.style.border = '2px solid hsl(0, 93%, 68%)';
  } else {
    errorMsg.classList.add('inactive');
    errorIcon.classList.add('inactive');
    input.style.border = '';
  }
}
