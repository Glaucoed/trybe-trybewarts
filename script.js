const loginButton = document.getElementById('submitButton');
const password = document.getElementById('password');
const email = document.getElementById('email');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textoArea = document.getElementById('textarea');
const spanArea = document.getElementById('counter');
const valorDeArea = textoArea.value.length;

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

let count = textoArea.maxLength;
window.onload = () => {
  spanArea.innerText = count;
};

const increment = (event) => {
  if (event.key === 'Backspace') {
    count += 1;
    spanArea.innerText = count;
  } else if (valorDeArea >= 0) {
    const result = textoArea.maxLength - textoArea.value.length;
    spanArea.innerText = result;
  }
};
textoArea.addEventListener('input', increment);
