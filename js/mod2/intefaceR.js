class InterfaceR {

    constructor() {
        this.init();
    }

    init() {
        this.obtenerCarrera();
        this.obtenerActividad();
        this.anios();
    }


    obtenerCarrera() {
        let formato;
        let url = cnxR.getUrl();
        url += 'carrera';
        cnxR.get(url)
            .then(res => {
                console.log(res);
                const datos = res.carrera;
                if (datos.length > 0) {
                    arrayCarreras = datos;
                    formato = datos.map(x => {
                        return (x.carrera);
                    });
                    console.log(formato);
                    let data = {};
                    data['Ninguno'] = null;
                    for (let i = 0; i < formato.length; i++) {
                        data[formato[i]] = null;
                    }
                    let options = {
                        data,
                        onAutocomplete: (text) => {
                            if(text === 'Ninguno'){
                                this.contendio(modulo.value, semestre.value,
                                    actividad.value, anio.value, estado.value); 
                            }else{
                                console.log(text);
                                const valor = this.busquedaBinaria(text, arrayCarreras);
                                console.log(valor);
                                console.log(arrayCarreras[valor]);
                                carrera = arrayCarreras[valor];
                                this.contendio(modulo.value, semestre.value,
                                actividad.value, anio.value, estado.value,carrera.id);
                            }
                           
                                
                        },
                        minLength: 3
                    };

                    var elems = document.querySelectorAll('.autocomplete');
                    M.Autocomplete.init(elems, options);

                } else {
                    console.log('no hay datos');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }


    busquedaBinaria(item, array) {
        let menor = 0;
        let mayor = array.length - 1;
        let aux = 0;
        let cont = 0;
        let fin = true;
        // debugger
        while (menor <= mayor) {
            let mitad = Math.floor((menor + mayor) / 2);
            let encontrar = array[mitad];
            if (encontrar.carrera == item) {
                return mitad;
            }
            console.log(encontrar.carrera.substr(0, 1));
            console.log(item.substr(0, 1));
            const en = encontrar.carrera.substr(0, 1);
            const it = item.substr(0, 1);
            aux = mitad;
            while (true) {
                // debugger
                if (en == it) {
                    if (cont === 0) {
                        ++mitad;
                    }
                    if (cont === 1) {
                        --mitad;
                    }
                    let encontrar = array[mitad];
                    if (encontrar.carrera == item) {
                        return mitad;
                    }
                    const e = encontrar.carrera.substr(0, 1);
                    const i = item.substr(0, 1);
                    if (e != i) {
                        cont++;
                        mitad = aux;
                        fin = false;
                    }
                    if (cont === 2) {
                        break;
                    }

                } else {
                    if (en > it) {
                        mayor = mitad - 1;
                        break;
                    } else {
                        menor = mitad + 1;
                        break;
                    }
                }

            }
            if (mitad != aux) {
                return mitad
            }
            if (!fin) {
                break;
            }

        }
        return -1;
    }


    obtenerActividad() {
        let url = cnxR.getUrl();
        url += 'tipo';
        cnxR.get(url)
            .then(res => {
                console.log(res);
                const datos = res.tipo;
                if (datos.length > 0) {
                    console.log(datos);
                    for (let i = 0; i < datos.length; i++) {
                        const x = datos[i];
                        let option = document.createElement('option');
                        option.value = x.id;
                        option.innerHTML = x.nombre;
                        actividad.appendChild(option);
                    }
                    let elems = document.querySelectorAll('select');
                    M.FormSelect.init(elems);

                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    anios() {
        const selectAnios = document.getElementById('anio');
        const max = new Date().getFullYear(),
            min = max - 10;

        for (let i = max; i > min; i--) {
            let option = document.createElement('option');
            option.value = `%${i}%`;
            option.innerHTML = i;
            selectAnios.appendChild(option);
        }

    }

    contendio(mod = '%%', sem = '%%', ac = '%%', fec = '%%', es = '%%', idcar = '%%') {
        paginador.innerHTML = '';
        let tr = '';
        let url = cnxR.getUrl();
        url += `actividad-reporte/?mod=${mod}&sem=${sem}&ac=${ac}&fecha=${fec}&idcar=${idcar}&estado=${es}`
        cnxR.get(url)
            .then(res => {
                console.log(res);
                const datos = res.actividad;
                if(datos.length > 0){
                    console.log(datos);
                    for (let i = 0; i < datos.length; i++) {
                        const {id,semestre,modulo,fecha ,tipo_actividade: {nombre: actividad},
                                descripcion ,materia:{ nombre: mat} , carrera: { carrera },
                                persona:{nombres},estado } = datos[i]; 
                        console.log(semestre,modulo,fecha,actividad,descripcion,mat,carrera,nombres);
                        tr +=`<tr> 
                        <td style="display:none;">${id}</td>
                        <td>${semestre}</td>
                        <td>${modulo}</td>
                        <td>${fecha}</td>
                        <td>${actividad}</td>
                        <td style="display:none;">${descripcion}</td>
                        <td>${mat}</td>
                        <td>${carrera}</td>
                        <td>${nombres}</td>
                        <td style="display:none;">${estado}</td>
                        <td><a class="btn-floating grey darken-4 modal-trigger" data-target="idModal" onclick="fila(event)"><i class="material-icons">add</i></a></td></tr>`;
                        console.log(tr);
                        
                    }
                    tbody.innerHTML = tr;
                    let p = new Paginador(paginador, tabla, 2);
                    p.Mostrar();
                }else{
                    console.log('si');
                    tbody.innerHTML = `<tr>
                    <td colspan="8" style="text-align: center;">
                    <h6>No Hay Datos</h6>
                    </td>
                    </tr>`;             
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    nombresFiles(id) {
        let url = cnxR.getUrl();
        url += `archivo/${id}`;
        cnxR.get(url)
        .then(res => {
            console.log(res);
            const datos = res.archivo;
            if(datos.length > 0){
                for (let i = 0; i < datos.length; i++) {
                    const x = datos[i];
                    this.obtenerFile(x.nombre);
                }
            }else{
                console.log('no hay datos');
                
            } 
        })
        .catch(err => {
            console.log(err);
        })
    }

    obtenerFile(file){
        let url = cnxR.getUrl();
        url += `archivo-file/${file}`;
        cnxR.getFile(url)
        .then(res =>  {
            console.log(res);
            let a = document.createElement('a');
            a.href = url;
            a.download = `${file}`;
            let img = document.createElement('img');
            img.style.width = '50px';
            img.style.height = '50px'; 
            img.src =  '../img/file.jpg';
            a.appendChild(img)
            archivos.appendChild(a);
        })
        .catch(err => {
            console.log(err);
        })
    }

}

// carrera: {id: 46, carrera: "INGENIERIA DE SISTEMAS", idfac: 2, createdAt: null, updatedAt: null}
// createdAt: "2019-10-15"
// descripcion: "esto es un prueba"
// estado: "P"
// fecha: "2019-10-16"
// id: 8
// idcarrera: 46
// idmat: 398
// idper: 3
// idtipoac: 1
// materia: {id: 398, siglas: "PUB-503", nombre: "MEDIOS DE PUBLICIDAD", createdAt: null, updatedAt: null}
// modulo: 3
// persona: {id: 3, nombres: "HUGO MARCELO", apat: "AJHUACHO", amat: "CALISAYA", email: "hugor@gmail.com", …}
// semestre: "2"
// tipo_actividade: {id: 1, nombre: "VISITAS TECNIAS", estado: "T", createdAt: "2019-10-02", updatedAt: "2019-10-02"}
// updatedAt: "2019-10-15