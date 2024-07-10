document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('countrySelect');
    const gdpChartCtx = document.getElementById('gdpChart').getContext('2d');
    const populationChartCtx = document.getElementById('populationChart').getContext('2d');

    let gdpChart, populationChart;

    // Fetch countries and populate the select dropdown
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.cca3;
                option.textContent = country.name.common;
                countrySelect.appendChild(option);
            });
        });

    // Fetch data when a country is selected
    countrySelect.addEventListener('change', () => {
        const countryCode = countrySelect.value;

        // Fetch GDP and population data
        fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`)
            .then(response => response.json())
            .then(data => {
                const gdpData = data[1].map(entry => ({
                    year: entry.date,
                    value: entry.value
                }));

                if (gdpChart) {
                    gdpChart.destroy();
                }

                gdpChart = new Chart(gdpChartCtx, {
                    type: 'line',
                    data: {
                        labels: gdpData.map(entry => entry.year),
                        datasets: [{
                            label: 'GDP (Current US$)',
                            data: gdpData.map(entry => entry.value),
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
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
            });

        fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.GROW?format=json`)
            .then(response => response.json())
            .then(data => {
                const populationData = data[1].map(entry => ({
                    year: entry.date,
                    value: entry.value
                }));

                if (populationChart) {
                    populationChart.destroy();
                }

                populationChart = new Chart(populationChartCtx, {
                    type: 'line',
                    data: {
                        labels: populationData.map(entry => entry.year),
                        datasets: [{
                            label: 'Population Growth (%)',
                            data: populationData.map(entry => entry.value),
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            borderColor: 'rgba(153, 102, 255, 1)',
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
            });
    });
});
