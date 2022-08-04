export default function CurrentWeather({ currentWeather }) {
  return (
    <div className='current-weather'>
      <div className='temperature'>
        <div className='text'>
          <p className='city'>{currentWeather?.city}</p>
          <p className='weather'>
            {(currentWeather?.weather ?? [])[0]?.description} 
          </p>
        <p className='degree'>{Math.round(currentWeather?.main?.temp)} °C</p>
        </div>
        <div className='icon'>
          <img
            src={`assets/images/icons/${
              (currentWeather?.weather ?? [])[0]?.icon
            }.png`}
            alt='weather-tody'
          />
        </div>
      </div>
      <div className='details'>
        <div className='parameters'>
          <div className='parameter'>
            <span className='label'>Feels Like</span>
            <span className='value'>
              {Math.round(currentWeather?.main?.feels_like)}°C
            </span>
          </div>
          <div className='parameter'>
            <span className='label'>Wind</span>
            <span className='value'>{currentWeather?.wind?.speed} m/s</span>
          </div>
          <div className='parameter'>
            <span className='label'>Humidity</span>
            <span className='value'>{currentWeather?.main?.humidity}%</span>
          </div>
          <div className='parameter'>
            <span className='label'>Pressure</span>
            <span className='value'>{currentWeather?.main?.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
