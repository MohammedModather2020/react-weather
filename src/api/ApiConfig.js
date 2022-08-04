import axios from 'axios';

// geo api config
export const geoApiConfig = axios.create({
  baseURL: process.env.REACT_APP_GEO_API_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
    'Content-Type': 'application/json',
  },
  timeout: 1000 * 60, // Wait for 1 minute
});

// open weather api config
export const openWeatherApiConfig = axios.create({
  baseURL: process.env.REACT_APP_OPEN_WEATHER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000 * 60, // Wait for 1 minute
});
