class InterfaceA {

    constructor() {

        
    }

    init(){
        this.tipoActividad();
        this.obtenerCarrera();
    }


    tipoActividad() {
        let url = cnx.getUrl();
        url += 'tipo';
        let option = '<option value="" disabled selected>Tipo de Actividad</option>';
        let elems = document.querySelectorAll('select');
        cnx.get(url)
            .then(res => {
                console.log(res);
                const datos = res.tipo;
                if (datos.length > 0) {
                    for (let i = 0; i < datos.length; i++) {
                        const x = datos[i];
                        option += `<option value="${x.id}">${x.nombre}</option>`;

                    }
                    actividad.innerHTML = option;
                    console.log(option);
                    M.FormSelect.init(elems);

                    // var a = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

                    // // Recibe un array y el elemento a Buscar. Devolverá el arreglo  si en caso
                    // function binarySearch(array, item) {
                    //     debugger
                    //     var low = 0;
                    //     var high = array.length - 1;

                    //     while (low <= high) {
                    //         var middle = Math.floor((low + high) / 2);
                    //         var guess = array[middle];
                    //         if (guess == item) {
                    //             return middle;
                    //         }
                    //         if (guess > item) {
                    //             high = middle - 1;
                    //         } else {
                    //             low = middle + 1;
                    //         }
                    //     }
                    //     return -1;
                    // }

                    // binarySearch(a, "c");



                } else {
                    console.log('no hay datos');
                }

            })
            .catch(err => {
                console.log(err);

            })
    }

    obtenerCarrera() {
        let formato;
        let url = cnx.getUrl();
        url += 'carrera';
        cnx.get(url)
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

                    for (let i = 0; i < formato.length; i++) {
                        data[formato[i]] = null;
                    }

                    let options = {
                        data,
                        onAutocomplete: (text) => {
                            console.log(text);
                            const valor = this.busquedaBinaria(text, arrayCarreras);
                            console.log(valor);
                            console.log(arrayCarreras[valor]);
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

    obtenerMaterias(){
        let url = cnx.getUrl();
        url += 'materia';
        cnx.get(url)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
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
}