// instancias

const cnx = new Conexion();
const io = new Interface();

// varibales
const rol = document.querySelector('#rol');
const tbody = document.querySelector('#tbody');
const agregar = document.querySelector('#agregar');
const rolModal = document.querySelector('#rolModal');
const form = document.querySelector('#form');
// let arrayRol = [];
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
    console.log('si');
});

form.addEventListener('submit', (e) => {
    console.log('si');
    e.preventDefault();
    const valor = validacion();
    console.log(valor);
    if(valor){
        let json = {};
        json.nombres = form.nombres.value;
        json.apat = form.apaterno.value;
        json.amat = form.amaterno.value;
        json.email = form.email.value;
        json.limitacion = form.limitacion.value;
        json.idrol = rolModal.value;
        json.estado = 'T';
        io.insertPerson(json);
    }else{
        M.toast({html: 'Complete los Campos!'});
    }
   
    
});


const validacion = ()=>{
    const nombres = form.nombres.value;
    const apaterno = form.apaterno.value;
    const amaterno = form.amaterno.value;
    const email = form.email.value;
    const limitacion = form.limitacion.value;
    const rol = rolModal.value;
    console.log(nombres, apaterno, amaterno, email, limitacion, rol);
    if(nombres !== '' && apaterno !== '' && amaterno !== '' && email !== '' && rol !== ''){
        return true;
    }
    return false;
}

// nombres,apat,amat,email,idrol,limitacion,estado