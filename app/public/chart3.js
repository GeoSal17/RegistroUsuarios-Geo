const ctx3 = document.getElementById('line');

new Chart(ctx3, {
type: 'line',
data: {
    labels: ['Data Engineer', 'Data Scientist', 'Data Scientist', 'Machine Learning Engineer', 'Research Scientist'],
    datasets: [{
    label: 'Roles de los empleados',
    data: [3464, 3314, 2440, 1705, 531],
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