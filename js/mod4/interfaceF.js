class InterfaceF {


    constructor() {
        this.anios();
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


    reporte(fecha, limite) {
        if (bool) {
            grafico.destroy();
            arrPuntos.length = 0;
            arrCarreras.length = 0;
        }
        let url = cnxF.getUrl();
        url += `facultad-report/?fecha=${fecha}&limit=${limite}`;
        cnxF.get(url)
            .then(res => {
                console.log(res);
                const datos = res.facultad;
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

}