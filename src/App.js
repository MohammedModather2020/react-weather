import CurrentWeather from './components/current-weather/CurrentWeather';
import Search from './components/search/Search';

function App() {
  const onSearchCityChange = (city) => {};
  return (
    <div className='container'>
      <Search onSearchCityChange={onSearchCityChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
