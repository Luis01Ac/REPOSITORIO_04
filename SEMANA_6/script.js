const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    if (nombre.value.length >= 3) {
        nombre.className = "valido";
        errorNombre.textContent = "";
        return true;
    } else {
        nombre.className = "invalido";
        errorNombre.textContent = "Debe tener al menos 3 caracteres";
        return false;
    }
}

function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email.value)) {
        email.className = "valido";
        errorEmail.textContent = "";
        return true;
    } else {
        email.className = "invalido";
        errorEmail.textContent = "Correo no válido";
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.value.length >= 8 && regex.test(password.value)) {
        password.className = "valido";
        errorPassword.textContent = "";
        return true;
    } else {
        password.className = "invalido";
        errorPassword.textContent = "Mínimo 8 caracteres, un número y un carácter especial";
        return false;
    }
}

function validarConfirmPassword() {
    if (password.value === confirmPassword.value && confirmPassword.value !== "") {
        confirmPassword.className = "valido";
        errorConfirm.textContent = "";
        return true;
    } else {
        confirmPassword.className = "invalido";
        errorConfirm.textContent = "Las contraseñas no coinciden";
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        edad.className = "valido";
        errorEdad.textContent = "";
        return true;
    } else {
        edad.className = "invalido";
        errorEdad.textContent = "Debes ser mayor de 18 años";
        return false;
    }
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarEmail() &&
        validarPassword() &&
        validarConfirmPassword() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
});
