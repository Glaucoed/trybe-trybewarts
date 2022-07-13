submitButton = document.getElementById("submitButton");
password = document.getElementById("password");
email = document.getElementById("email");

function login() {
  if (password.value === "123456" && email.value === "tryber@teste.com") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

submitButton = document
  .getElementById("submitButton")
  .addEventListener("click", login);
// submitButton.addEventListener('click');
