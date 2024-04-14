import { URL_USERS } from "../API/URLS.js"


//Selectores
const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");


//Eventos

formLogin.addEventListener("submit", (event) => {

    event.preventDefault();

    logIn()
})

async function logIn() {

    const response = await fetch(`${URL_USERS}?email=${email.value}`);
    const data = await response.json();

    if (!data) {
        console.error("Email no registrado");
        return;
    }

    if (data[0].password !== password.value) {
        console.error("Contraseña invalida");
        return;
    }

    localStorage.setItem("user", JSON.stringify(data[0]));
    window.location.href = "administrator.html";
}