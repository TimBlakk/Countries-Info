import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './visualization.css';

function Visualization() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const gdpChartRef = useRef(null);
  const populationChartRef = useRef(null);
  const gdpChart = useRef(null);
  const populationChart = useRef(null);

  useEffect(() => {
    // Fetch countries and populate the select dropdown
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetchData(selectedCountry);
    }
  }, [selectedCountry]);

  const fetchData = (countryCode) => {
    // Fetch GDP data
    fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`)
      .then(response => response.json())
      .then(data => {
        const gdpData = data[1]?.map(entry => ({
          year: entry.date,
          value: entry.value
        })) || [];
        updateChart(gdpChartRef, gdpChart, gdpData, 'GDP (Current US$)', 'rgba(75, 192, 192, 1)');
      });

    // Fetch population growth data
    fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.GROW?format=json`)
      .then(response => response.json())
      .then(data => {
        const populationData = data[1]?.map(entry => ({
          year: entry.date,
          value: entry.value
        })) || [];
        updateChart(populationChartRef, populationChart, populationData, 'Population Growth (%)', 'rgba(153, 102, 255, 1)');
      });
  };

  const updateChart = (chartRef, chartInstance, data, label, color) => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (data.length === 0) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: label,
            data: [],
            backgroundColor: color.replace('1)', '0.2)'),
            borderColor: color,
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
      return;
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(entry => entry.year),
        datasets: [{
          label: label,
          data: data.map(entry => entry.value),
          backgroundColor: color.replace('1)', '0.2)'),
          borderColor: color,
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
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Country Data Visualization</h1>
      <Link to="/">
        <h1 className="text-center3">Home Page</h1>
      </Link>
      <div className="form-group">
        <label htmlFor="countrySelect">Select a Country:</label>
        <select 
          className="form-control" 
          id="countrySelect"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.cca3}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2 className="text-center">GDP</h2>
          <canvas ref={gdpChartRef}></canvas>
        </div>
        <div className="col-md-6">
          <h2 className="text-center2">Population Growth</h2>
          <canvas ref={populationChartRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default Visualization;
