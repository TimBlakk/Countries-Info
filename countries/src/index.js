import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "World Countries Information": "World Countries Information",
          "Search for a country...": "Search for a country...",
          "Filter by Continent": "Filter by Continent",
          "Sort by": "Sort by",
          "Population": "Population",
          "Region": "Region",
          "Language": "Language",
          "Currency": "Currency",
          "Country Quiz": "Country Quiz",
          "View Data Visualization": "View Data Visualization",
          // Add more translations as needed
        }
      },
      fr: {
        translation: {
          "World Countries Information": "Informations sur les pays du monde",
          "Search for a country...": "Recherchez un pays...",
          "Filter by Continent": "Filtrer par continent",
          "Sort by": "Trier par",
          "Population": "Population",
          "Region": "Région",
          "Language": "Langue",
          "Currency": "Devise",
          "Country Quiz": "Quiz sur les pays",
          "View Data Visualization": "Voir la visualisation des données",
          // Add more translations as needed
        }
      }
    },
    lng: "en", // Set default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);