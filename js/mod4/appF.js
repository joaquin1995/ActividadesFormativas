// instancias
const cnxF = new Conexion();
const ioF = new InterfaceF();
// variables
const anio = document.querySelector('#anio');
const cantidad = document.querySelector('#cantidad');

let grafico, bool = false;
const texto = document.querySelector('#texto');

let arrCarreras = [],
    arrPuntos = [];

// funciones


anio.addEventListener('change', () => {
    const valor = control();
    console.log(valor);
    if (valor) {
        ioF.reporte(anio.value, cantidad.value);
        texto.style.display = 'none';
    }

});

cantidad.addEventListener('change', () => {
    const valor = control();
    console.log(valor);
    if (valor) {
        ioF.reporte(anio.value, cantidad.value);
        texto.style.display = 'none';
    }


});

const control = () => {

    if (anio.value !== '' && cantidad.value !== '') {
        return true;
    }
    return false;
}