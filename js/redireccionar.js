cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', verificarLogin)
}

function verificarLogin() {
    let user = JSON.parse(localStorage.getItem('user'));
    (!user) ? location.href = './login.html' :console.log('Bienvenido');    
}