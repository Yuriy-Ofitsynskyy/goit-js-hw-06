const input = document.querySelector('#validation-input');

const dataLength = input.getAttribute('data-length');

input.addEventListener('input', (event) => {
    if(event.currentTarget.value.length === Number(dataLength)){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
})

