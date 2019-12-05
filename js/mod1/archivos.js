let nuevaLista = [];
let mb;
let contenido = document.querySelector('#archivos');
let total = document.querySelector('#total');
let guardar = document.querySelector('#guardar');

let totalMb = 0;
const archivos = (obj) => {
    contenido.innerHTML = '';
    total.innerHTML = '';
    if (window.FileReader) {
        let contador = -1;
        let file;
        while (file = obj.files[++contador]) {
            const reader = new FileReader();
            reader.onloadend = ((file) => {
                nuevaLista.push(file);
            })(file);
        }
    }
    if (nuevaLista.length > 0) {
        for (let i = 0; i < nuevaLista.length; i++) {
            const x = nuevaLista[i];
            let tamaño = (x.size / 1000000);
            if (tamaño > 1) {
                mb = Number(tamaño.toFixed(1)) + ' MB';
                totalMb = totalMb + Number(tamaño.toFixed(1));
            } else {
                mb = Number(tamaño.toFixed(4)) + ' MB';
                totalMb = totalMb + Number(tamaño.toFixed(4));
            }
            let li = `<li>${x.name}-size:${mb}  <a href='#' id="${i}" class="eliminar">Eliminar</a></li>   `;
            contenido.innerHTML += li;
        }
        if (totalMb > 1) {
            total.innerHTML = `Total ${totalMb.toFixed(1)} MB`;
            totalMb = 0;
        } else {
            total.innerHTML = `Total ${totalMb.toFixed(4)} MB`;
            totalMb = 0;
        }


    }
}

const eliminar = (id) => {
    nuevaLista.splice(id, 1);
    if (nuevaLista.length > 0) {
        contenido.innerHTML = '';
        total.innerHTML = '';
        for (let i = 0; i < nuevaLista.length; i++) {
            const x = nuevaLista[i];
            let tamaño = (x.size / 1000000);
            if (tamaño > 1) {
                mb = Number(tamaño.toFixed(1)) + ' MB';
                totalMb = totalMb + Number(tamaño.toFixed(1));
            } else {
                mb = Number(tamaño.toFixed(4)) + ' MB';
                totalMb = totalMb + Number(tamaño.toFixed(4));
            }
            let li = `<li>${x.name}-size:${mb}  <a href='#' id="${i}" class="eliminar">Eliminar</a></li>`;
            contenido.innerHTML += li;

        }
        if (totalMb > 1) {
            total.innerHTML = `Total ${totalMb.toFixed(1)} MB`;
            totalMb = 0;
        } else {
            total.innerHTML = `Total ${totalMb.toFixed(4)} MB`;
            totalMb = 0;
        }

    } else {
        contenido.innerHTML = '';
        total.innerHTML = `Total ${totalMb} MB`;

    }
}

contenido.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('eliminar')) {
        console.log('si');
        console.log(e.target.id);
        const valor = e.target.id;
        eliminar(valor);
        e.target.parentElement.remove();
        console.log(e.target.parentElement);

    } else {
        console.log('no');
    }
}

// guardar.addEventListener('click',()=> {
//        const validar = Number(total.textContent.split(' ')[0]);
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
// });