// document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems);

var elems = document.querySelectorAll('.tooltipped');
var instances = M.Tooltip.init(elems);

// var elems = document.querySelectorAll('select');
// var instances = M.FormSelect.init(elems);
let options = {
    format: 'yyyy-mm-dd'
}

var elems = document.querySelectorAll('.datepicker');
var instances = M.Datepicker.init(elems, options);

var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems);

cargarEventListeners()

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        let btnSalir = document.querySelector('.row').children[1].children[1].children[1].children[0];
        btnSalir.addEventListener('click',() => {
            localStorage.clear();
            location.href = './login.html';
        })
        mostrarUsuario();
    })
}

function mostrarUsuario()  {
        const user = JSON.parse(localStorage.getItem('user'));
        let slide = document.querySelector('.user-view');
        let nombre = slide.children[0].children[1];
        nombre.textContent = user.usuario
        let rol = slide.children[1].children[0];
        rol.textContent = user.rol.toUpperCase();
        let correo = slide.children[2].children[0];
        correo.textContent = user.email;

}

    // var options1 = {

    //     data: {
    //         "PROGRAMACION 1": null,
    //         "COMERCIO ELECTRONICO": null,
    //         "BASES DE DATOS": 'https://placehold.it/250x250'
    //     },

    //     onAutocomplete: function(text){
    //         console.log('si',text);

    //     }
    // }


    // var elems = document.querySelectorAll('.autocomplete1');
    // var instances = M.Autocomplete.init(elems, options1);
//   });



