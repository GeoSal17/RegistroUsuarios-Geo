const ctx = document.getElementById('barchart');

new Chart(ctx, {
type: 'bar',
data: {
    labels: ['15-54k', '54-93k', '93-132k', '132-172k', '172-211k', '211-250k'],
    datasets: [{
    label: 'Salarios',
    data: [763, 2569, 3849, 4028, 2739, 1464],
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

