// instancias

const cnxR = new Conexion();
const ioR = new InterfaceR();

// variables globales
const archivos = document.querySelector('#archivos');
const desc = document.querySelector('#dsc');
const est = document.querySelector('#est');
const paginador = document.getElementById('paginador');
const tabla = document.getElementById('tblDatos');
const tbody = document.querySelector('#tbody')
const carreras = document.querySelector('#carrera');
const modulo = document.querySelector('#modulo');
const semestre = document.querySelector('#semestre');
const anio = document.querySelector('#anio');
const estado = document.querySelector('#estado');
const actividad = document.querySelector('#actividad');
const excel = document.querySelector('#excel');
let arrayCarreras = [],
     carrera = '%%';

// funciones 

modulo.addEventListener('change', () => {
     const valor = validar();
     if (valor) {
          ioR.contendio(modulo.value, semestre.value,
               actividad.value, anio.value, estado.value)
     }

});

semestre.addEventListener('change', () => {
     const valor = validar();
     if (valor) {
          ioR.contendio(modulo.value, semestre.value,
               actividad.value, anio.value, estado.value,carrera.id)
     }
});

anio.addEventListener('change', () => {
     const valor = validar();
     if (valor) {
          ioR.contendio(modulo.value, semestre.value,
               actividad.value, anio.value, estado.value,carrera.id)
     }
});

estado.addEventListener('change', () => {
     const valor = validar();
     if (valor) {
          ioR.contendio(modulo.value, semestre.value,
               actividad.value, anio.value, estado.value,carrera.id)
     }
});

actividad.addEventListener('change', () => {
     const valor = validar();
     if (valor) {
          ioR.contendio(modulo.value, semestre.value,
               actividad.value, anio.value, estado.value,carrera.id)
     }
});

const validar = () => {

     const md = modulo.value;
     const sm = semestre.value;
     const an = anio.value;
     const es = estado.value;
     const ac = actividad.value;
     if (md !== "%%" || sm !== "%%" || an !== "%%" || es !== "%%" ||
          ac !== "%%") {
          return true;
     }
     return false;

}

function fila(e) {
     console.log('si');
     console.log(e.target.parentElement.parentElement.parentElement);
     const filas = e.target.parentElement.parentElement.parentElement.children[0].textContent;
     const des = e.target.parentElement.parentElement.parentElement.children[5].textContent;
     const estado = e.target.parentElement.parentElement.parentElement.children[9].textContent;
     desc.textContent = `Descripcion: ${des}`;
     if(estado === 'P'){
          est.textContent = 'Estado: Pendiente'   
     }else{
          est.textContent = 'Estado: Aprobado' 
     }
     archivos.innerHTML = '';
     ioR.nombresFiles(filas);
     console.log(filas,des,estado);
     // ioA.obtenerNoticiaId(filas);
 }

 excel.addEventListener('click',()=> {
      console.log('si');
      exportTableToExcel('tblDatos','Reporte');
 });

