// instancias 
const cnxC = new Conexion();
const ioC = new InterfaceC();


// variables globales
const anio = document.querySelector('#anio');
const cantidad = document.querySelector('#cantidad');
let arrCarreras = [],
    arrPuntos = [];
let grafico, bool = false;
const texto = document.querySelector('#texto');
const tipo = document.querySelector('#tipo')
// funciones


anio.addEventListener('change', () => {
    const valor = control();
    console.log(valor);
    if (valor) {
        ioC.reporte(anio.value, cantidad.value, tipo.value);
        texto.style.display = 'none';

    }

});

cantidad.addEventListener('change', () => {
    const valor = control();
    console.log(valor);
    if (valor) {
        ioC.reporte(anio.value, cantidad.value, tipo.value);
        texto.style.display = 'none';
    }
});


tipo.addEventListener('change', () => {
    const valor = control();
    console.log(valor);
    if (valor) {
        ioC.reporte(anio.value, cantidad.value, tipo.value);
        texto.style.display = 'none';
    }
})

const control = () => {

    if (anio.value !== '' && cantidad.value !== '' && tipo.value !== '') {
        return true;
    }
    return false;
}