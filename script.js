const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');
const formGroup = document.querySelector('.form-group');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === '' || !emailPattern.test(email)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    alert("Thank you! We'll notify you at " + email);
    emailInput.value = '';
  }
});
