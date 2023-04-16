const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = slider.getAttribute("min");

slider.addEventListener('input', (event) => {
text.style.fontSize = `${event.currentTarget.value}px`;
})
