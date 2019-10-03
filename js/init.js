// document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    // var elems = document.querySelectorAll('select');
    // var instances = M.FormSelect.init(elems);


    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);


    // var options = {

    //     data: {
    //         "SISTEMAS": null,
    //         "REDES": null,
    //         "FINACIERA": 'https://placehold.it/250x250'
    //     },

    //     onAutocomplete: (text)=> {
    //         console.log('si',text);

    //     },
    //     minLength: 3
    // }


    // var elems = document.querySelectorAll('.autocomplete');
    // var instances = M.Autocomplete.init(elems, options);


    var options1 = {

        data: {
            "PROGRAMACION 1": null,
            "COMERCIO ELECTRONICO": null,
            "BASES DE DATOS": 'https://placehold.it/250x250'
        },

        onAutocomplete: function(text){
            console.log('si',text);

        }
    }


    var elems = document.querySelectorAll('.autocomplete1');
    var instances = M.Autocomplete.init(elems, options1);
//   });

