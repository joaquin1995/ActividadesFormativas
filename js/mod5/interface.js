class Interface {


    constructor() {
        this.obtenerRol();
    }

    obtenerRol() {
        let url = cnx.getUrl();
        url += 'rol';
        cnx.get(url)
            .then(res => {
                console.log(res);
                const datos = res.rol;
                if (datos.length > 0) {
                    console.log(datos);
                    for (let i = 0; i < datos.length; i++) {
                        const {
                            id,
                            nombre
                        } = datos[i];
                        var option = document.createElement("option");
                        option.text = nombre;
                        option.value = id;
                        rol.appendChild(option);
                        var option2 = document.createElement("option");
                        option2.text = nombre;
                        option2.value = id;
                        rolModal.appendChild(option2);
                    }
                    var elems = document.querySelectorAll('select');
                    M.FormSelect.init(elems);
                } else {
                    console.log('no hay datos');

                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    getPerson(idrol) {
        let tr = '';
        let url = cnx.getUrl();
        url += `persona-rol/${idrol}`;
        cnx.get(url)
            .then(res => {
                console.log(res);
                const datos = res.persona;
                if (datos.length > 0) {
                    console.log(datos);
                    for (let i = 0; i < datos.length; i++) {
                        const {
                            id,
                            nombres,
                            amat,
                            apat,
                            limitacion,
                            email,
                            cuenta: {
                                usuario,
                                password
                            }
                        } = datos[i];
                        console.log(nombres, amat, apat, limitacion, email, usuario, password);
                        tr += `<tr> 
                        <td style="display:none;">${id}</td>
                        <td>${nombres}</td>
                        <td>${apat}</td>
                        <td>${amat}</td>
                        <td>${email}</td>
                        <td>${limitacion}</td>
                        <td>${usuario}</td>
                        <td>${password}</td>
                        </tr>`;
                    }
                    tbody.innerHTML = tr;
                } else {
                    console.log('no hay datos');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    insertPerson(json) {
        let url = cnx.getUrl();
        url += `persona`;
        cnx.post(json, url)
            .then(res => {
                console.log(res);
                M.toast({
                    html: 'Ingresado Correctamente!'
                });
                form.reset();
                this.getPerson(rol.value);
            })
            .catch(err => {
                console.log('Fallo',err);
                
            })
    }



}

// Nombres	A.paterno	A.materno	Email	Limitacion	Usuario	Password

// amat: "CALISAYA"
// apat: "AJHUACHO"
// createdAt: "2019-10-14"
// cuenta: {id: 5, usuario: "hugo", password: "123456", estado: "T", idper: 3, …}
// email: "hugor@gmail.com"
// estado: "T"
// id: 3
// idcarr: 46
// idrol: 1
// limitacion: 2
// nombres: "HUGO MARCELO"
// updatedAt: "2019-10-14"