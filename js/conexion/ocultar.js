cargarEventListeners()

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.rol.toUpperCase() != 'ADMINISTRADOR') {
            let slide = document.querySelector('#slide-out').children[4]
            document.querySelector('#slide-out').removeChild(slide)
        }
        if (user.rol.toUpperCase() == 'DOCENTE') {
            let slide = document.querySelector('#slide-out').children[3]
            document.querySelector('#slide-out').removeChild(slide)
        }

        
    })
}
