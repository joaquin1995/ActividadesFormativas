const char = (carrera, puntos) => {
    grafico = new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: carrera,
            datasets: [{
                label: "Carreras",
                backgroundColor: '#3e95cd',
                data:  puntos
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'CARRERAS'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 0
                    }
                }]
            }
        },
        plugins: [{
            beforeInit: function (chart) {
                chart.data.labels.forEach(function (value, index, array) {
                    var a = [];
                    a.push(value.slice(0, 10));
                    var i = 1;
                    while (value.length > (i * 10)) {
                        a.push(value.slice(i * 10, (i + 1) * 10));
                        i++;
                    }
                    array[index] = a;
                })
            }
        }]
    })
}