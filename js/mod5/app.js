// instancias

const cnx = new Conexion();
const io = new Interface();

// varibales
const rol = document.querySelector('#rol');
const tbody = document.querySelector('#tbody');
const agregar = document.querySelector('#agregar');
const editar = document.querySelector('#editar');
const rolModal = document.querySelector('#rolModal');
const form = document.querySelector('#form');
let id, nom, ap, am, em, lm, uss, pass;
let operacion = 0;
// funciones 


rol.addEventListener('change', () => {
    const valor = rol.value;
    console.log(valor);
    if (valor !== '') {
        io.getPerson(valor);
    }
});

tbody.addEventListener('click', (e) => {
    // debugger
    console.log(e.target.parentElement.parentElement.children);
    document.querySelectorAll('#tbody tr').forEach(x => {
        console.log(x);
        x.classList.remove('highlighted');

    })
    console.log(e.target.parentElement);
    e.target.parentElement.classList.add('highlighted');
})


agregar.addEventListener('click', () => {
    operacion = 0;
    document.querySelector('#cuenta').style.display = 'none';
    // rolModal.style.display = 'block';
    form.reset();
});


const validacion = () => {
    const nombres = form.nombres.value;
    const apaterno = form.apaterno.value;
    const amaterno = form.amaterno.value;
    const email = form.email.value;
    const limitacion = form.limitacion.value;
    const rol = rolModal.value;
    console.log(nombres, apaterno, amaterno, email, limitacion, rol);
    if (nombres !== '' && apaterno !== '' && amaterno !== '' && email !== '' && rol !== '') {
        return true;
    }
    return false;
}


document.getElementById("tblDatos").onclick = function (e) {
    // debugger
    // obtenemos el elemento sobre el que se ha hecho click
    if (!e) e = window.event;
    if (!e.target) e.target = e.srcElement;
    // e.target ahora simboliza la celda en la que hemos hecho click
    // subimos de nivel hasta encontrar un tr
    var TR = e.target;
    while (TR.nodeType == 1 && TR.tagName.toUpperCase() != "TR")
        TR = TR.parentNode;
    var celdas = TR.getElementsByTagName("TD");
    // cogemos la primera celda TD del tr (si existe)
    if (celdas.length != 0) {

        // Nombres	A.paterno	A.materno	Email	Limitacion(MB)	Usuario	Password
        id = celdas[0].innerHTML;
        nom = celdas[1].innerHTML;
        ap = celdas[2].innerHTML;
        am = celdas[3].innerHTML;
        em = celdas[4].innerHTML;
        lm = celdas[5].innerHTML;
        uss = celdas[6].innerHTML;
        pass = celdas[7].innerHTML;
    }
    // devolvemos su contenido
    // alert( celdas[0].innerHTML );
    console.log(celdas);
}


editar.addEventListener('click', () => {
    form.reset();
    operacion = 1;
    const elem = document.getElementById('idModal');
    const instance = M.Modal.init(elem, {
        dismissible: false
    });
    instance.open();
    document.querySelector('#cuenta').style.display = 'block';
    llenarCampos();
    // rolModal.style.display = 'block';

});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    switch (operacion) {
        case 0:
            insertar();
            console.log('insertar');
            
            break;
        case 1:
            actualizar();
            console.log('actualizar');
            
            break;
        default:
            break;
    }
    
});

const insertar = ()=>{
    const valor = validacion();
    console.log(valor);
    if (valor) {
        let json = {};
        json.nombres = form.nombres.value;
        json.apat = form.apaterno.value;
        json.amat = form.amaterno.value;
        json.email = form.email.value;
        json.limitacion = form.limitacion.value;
        json.idrol = rolModal.value;
        json.estado = 'T';
        io.insertPerson(json);
    } else {
        M.toast({
            html: 'Complete los Campos!'
        });
    }
}

const actualizar = ()=> {
  

}

const llenarCampos = () =>{
    form.nombres.value = nom;
    form.apaterno.value = ap;
    form.amaterno.value = am;
    form.email.value = em;
    form.limitacion.value = lm;
    rolModal.value = rol.value;
    form.uss.value = uss;
    form.pass.value = pass;
    const lbl = form.querySelectorAll('label');
    for (let i = 0; i < lbl.length; i++) {
        const x = lbl[i];
        console.log(x);
        x.classList.add('active');
    }
}