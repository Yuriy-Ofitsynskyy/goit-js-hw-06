function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const tagBody = document.querySelector("body");
const Btn = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");

Btn.addEventListener('click', (event) => {
tagBody.style.backgroundColor = getRandomHexColor();
colorCode.textContent = getRandomHexColor();
})