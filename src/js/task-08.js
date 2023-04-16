const form = document.querySelector(".login-form");

form.addEventListener('submit', (event) => {
event.preventDefault();
const email = event.currentTarget.elements.email.value;
const password = event.currentTarget.elements.password.value;

if(email === "" || password === "") {
    return alert("Усі поля повинні бути заповненими!")
}

const formData = {
    email,
    password,
};
console.log(formData);
event.currentTarget.reset();
})