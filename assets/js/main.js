const button = document.querySelector("#menu");
const buttonX = document.querySelector("#menu-sair");

function alternarMenu(evento) {
  if (evento.type === "touchstart") {
    evento.preventDefault();
  }
  const menu = document.querySelector(".header__nav");
  menu.classList.toggle("active");
}

button.addEventListener("click", alternarMenu);
buttonX.addEventListener("click", alternarMenu);

button.addEventListener("touchstart", alternarMenu);
buttonX.addEventListener("touchstart", alternarMenu);
