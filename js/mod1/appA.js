//instancias

const cnx = new Conexion();
const io = new InterfaceA();

//variables globales
let arrayCarreras = [],
    arrayMaterias = [];
const formulario = document.querySelector('#form');
const circulo = document.querySelector('#circulo');
const actividad = document.querySelector('#actividad');
const semestre = document.querySelector('#semestre');
const modulo = document.querySelector('#modulo');
const fecha = document.querySelector('#fecha');
const descripcion = document.querySelector('#textarea1');
let carrera = '',
    materia = '';

//funciones

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const validar = control();
    const validarArchivo = controlArchivo();
    if (validar) {
        if (validarArchivo) {
           const json =  datosJson();
           console.log(json);
           circulo.style.display = 'block';
           formulario.style.display = 'none';
           io.guardarActividad(json);
        } else {
            M.toast({
                html: 'Verfique El limete de sus archivos'
            });
        }
    } else {
        M.toast({
            html: 'Porfavor Complete los Campos'
        });
    }

});

const control = () => {
    const sm = semestre.value;
    const md = modulo.value;
    const fc = fecha.value;
    const act = actividad.value;
    const desc = descripcion.value;
    if (sm !== '' && md !== '' && fc !== '' && desc !== '' &&
        act !== '' && carrera !== '' && materia !== '') {
        return true
    }
    return false;
}

const controlArchivo = () => {
    const validar = Number(total.textContent.split(' ')[1]);
    console.log(total.textContent.split(' '));
    console.log(validar);
    if (!isNaN(validar)) {
        if (validar > 2.0) {
            return false;
        }
        return true;

    } else {
        false;
    }
}

const datosJson = () => {
    return {

        modulo:modulo.value,
        semestre:semestre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        idtipoac:actividad.value,
        idmat:materia.id,
        idcarrera:carrera.id,
        idper:3,
        estado:'P'
    }
}

// const validar = Number(total.textContent.split(' ')[0]);
//        if(validar){
//         console.log(validar);
//         if(validar > 2.0){
//             console.log('Sobres poso los MB');
//         }else{
//             let formData = new FormData();
//             formData.append('descripcion', 'hola');
//             formData.append('idcas', 2);
//             formData.append('file', nuevaLista[0]);
//             console.log(formData);
//             formData.forEach(x => console.log(x))
//             console.log('Guardado');
//         }
//        }else{
//            console.log('no hay datos');     
//        }