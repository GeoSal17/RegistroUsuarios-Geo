const ctx4 = document.getElementById('polarArea');

new Chart(ctx4, {
type: 'polarArea',
data: {
    labels: ['SE', 'EX', 'MI', 'EN'],
    datasets: [{
    label: 'Nivel de experiencia de los empleados',
    data: [10670,501,4038,1325],
    borderWidth: 1
    }]
},
options: {
    scales: {
    y: {
        beginAtZero: true
    }
    }
}
});