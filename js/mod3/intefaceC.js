class InterfaceC {

    constructor() {
        this.anios();
        this.getTypeActivity();
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

    reporte(fecha, limite, tipo) {
        if (bool) {
            grafico.destroy();
            arrPuntos.length = 0;
            arrCarreras.length = 0;
        }
        let url = cnxC.getUrl();
        url += `carrera-report/?fecha=${fecha}&limit=${limite}&tipo=${tipo}`;
        cnxC.get(url)
            .then(res => {
                console.log(res);
                const datos = res.carrera;
                if (datos.length > 0) {
                    bool = true;
                    for (let i = 0; i < datos.length; i++) {
                        const x = datos[i];
                        console.log(x);
                        arrCarreras.push(x.nom);
                        arrPuntos.push(Number(x.Total));
                        console.log(arrCarreras);
                        console.log(arrPuntos);
                    }
                    char(arrCarreras, arrPuntos);
                } else {
                    console.log('no hay datos');
                    bool = false;
                    texto.style.display = 'block';

                }

            })
            .catch(err => {
                console.log(err);

            })

    }

    getTypeActivity() {
        let url = cnxC.getUrl();
        url += 'tipo';
        cnxC.get(url)
            .then(res => {
                console.log(res);
                const datos = res.tipo;
                if (datos.length > 0) {
                    for (let i = 0; i < datos.length; i++) {
                        const x = datos[i];
                        let option = document.createElement("option");
                        option.value = x.id;
                        option.text = x.nombre;
                        tipo.appendChild(option);
                    }
                    let elems = document.querySelectorAll('select');
                    M.FormSelect.init(elems);

                } else {
                    console.log('No Hay Datos');

                }

            })
            .catch(err => {
                console.log(err);
            })
    }


}