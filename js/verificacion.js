// Variable Global
const loginBtn = document.querySelector('button');
const conexion = new Conexion();

//EventListeners
cargarEventListeners();

function cargarEventListeners() {

    document.addEventListener('DOMContentLoaded', cargarStorage);

    loginBtn.addEventListener('click', enviarDatos);

    document.addEventListener('keydown', teclado);
}

//Funciones
function enviarDatos(e) {
    e.preventDefault();
    let nombre =  document.querySelectorAll('.form-control')[0].value;
    let password = document.querySelectorAll('.form-control')[1].value;
    let url = conexion.getUrl()
    url += 'personalogin';
    let token = '';

    let data = `usuario=${nombre}&password=${password}&token=true`;
    
    conexion.postToken(data,url)
    .then(res => {
        console.log(res);
        token = res.token
    })
    .then(() => {
        let datosToken = parseJwt(token)
        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        };
        localStorage.setItem('user', JSON.stringify(datosToken))
        localStorage.setItem('rol',datosToken.rol);

    })
    .then(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        // if(user.idrol === 1){
            location.href = './index.html'
        // }
    })
    .catch(err => {
        console.log(err);
 
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            confirmButtonText: 'Volver a Intentarlo',
          })        
    })
}




function cargarStorage() {
    const user = JSON.parse(localStorage.getItem('user'));
    (user) ? location.href = './index.html' :console.log('Sin Usuario'); 
}

function teclado(e) {
    if(e.key == 'Enter') {
        enviarDatos(e)
    }
  }
