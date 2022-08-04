import { useState } from 'react';
import { openWeatherApiConfig } from './api/ApiConfig';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Search from './components/search/Search';

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, SetForecastWeather] = useState({});
  // ------------------------------------------------------------------->
  // call api for get weather for pass city
  const onSearchCityChange = (search) => {
    const [latitude, longitude] = search.value.split(' ');
    const currentWeatherFetch = openWeatherApiConfig.get(
      `weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = openWeatherApiConfig.get(
      `forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (res) => {
        setCurrentWeather({ city: search.label, ...res[0]?.data });
        SetForecastWeather({ city: search.label, ...res[1]?.data });
      })
      .catch((err) => {});
  };
  return (
    <div className='container'>
      <Search onSearchCityChange={onSearchCityChange} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </div>
  );
}

export default App;
