const submitButton = document.getElementById('submitButton');
const password = document.getElementById('password');
const email = document.getElementById('email');

function login() {
  if (password.value === '123456' && email.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
submitButton.addEventListener('click', login);
