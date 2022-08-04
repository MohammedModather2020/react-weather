export default function CurrentWeather() {
  return (
    <div className='current-weather'>
      <div className='temperature'>
        <div className='text'>
          <p className='city'></p>
          <p className='weather'></p>
        </div>
        <div className='icon'>
          <img src='assets/images/icons/01d.png' alt='weather-tody' />
        </div>
      </div>
      <div className='details'>
        <p className='degree'></p>
        <div className='parameters'>
          <div className='parameter'>
            <span className='label title'>Details</span>
          </div>
          <div className='parameter'>
            <span className='label'>Feels Like</span>
            <span className='value'>22</span>
          </div>
          <div className='parameter'>
            <span className='label'>Wind</span>
            <span className='value'>2 m/s</span>
          </div>
          <div className='parameter'>
            <span className='label'>Humidity</span>
            <span className='value'>15%</span>
          </div>
          <div className='parameter'>
            <span className='label'>Pressure</span>
            <span className='value'>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
