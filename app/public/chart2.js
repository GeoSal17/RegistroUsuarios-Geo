const ctx2 = document.getElementById('doughnut');

new Chart(ctx2, {
type: 'doughnut',
data: {
    labels: ['US','GB', 'CA', 'ES','DE','FR', 'IN', 'LT','MX','IN'],
    datasets: [{
    label: 'Ubicación de las compañías',
    data: [14518,694,455,133, 105,65,63,20,15,14],
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