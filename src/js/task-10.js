function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let box = document.createElement("div");
box.style.height = "30px";
box.style.width = "30px";
box.style.backgroundColor = getRandomHexColor();

inputNumber.addEventListener('input', function(event) {
  if (event.currentTarget.value === "") { 
    alert("Введіть номер!");
  }
  let number = Number(event.currentTarget.value);
  console.log(number);
  });

  
createBtn.addEventListener('click', () => {
    createBoxes();
    box.style.backgroundColor = getRandomHexColor();
})

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
})

function createBoxes(amount) {
boxes.append(box);
}

function destroyBoxes() {
  boxes.textContent = "";
}

