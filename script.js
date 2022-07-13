const loginButton = document.getElementById('submitButton');
const password = document.getElementById('password');
const email = document.getElementById('email');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function login() {
  if (password.value === '123456' && email.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', login);

submitButton.disabled = true;
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
