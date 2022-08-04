import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { DAYS_OF_WEEK } from '../../utils';

export default function ForecastWeather({ forecastWeather }) {
  const dayInWeek = new Date().getDay(); // get current day
  const forecastDays = DAYS_OF_WEEK.slice(dayInWeek).concat(
    DAYS_OF_WEEK.slice(0, dayInWeek)
  ); // ------------------------------------------------------------------->
  return (
    <div className='forecast-weather'>
      <Accordion allowZeroExpanded>
        {forecastWeather?.list?.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <div className="start">
                    <img
                    className='icon-small'
                    src={`assets/images/icons/${
                      (item?.weather ?? [])[0]?.icon
                    }.png`}
                    alt='weather'
                  />
                  <h3 className='day'>{forecastDays[index]}</h3>
                  </div>
                  <p className='description'>
                    {item?.weather[0]?.description} {' '}
                    <span className='min'>
                      {Math.round(item?.main?.temp_min)}°C
                    </span>{' '}
                    / {' '}
                    <span className='max'>
                      {Math.round(item?.main?.temp_max)}°C
                    </span>
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details'>
                <div className='item'>
                  <h3 className='title'>Pressure:</h3>
                  <p className='desc'>{item?.main?.pressure} hPa</p>
                </div>
                <div className='item'>
                  <h3 className='title'>Humidity:</h3>
                  <p className='desc'>{item?.main?.humidity} %</p>
                </div>
                <div className='item'>
                  <h3 className='title'>Clouds:</h3>
                  <p className='desc'>{item?.clouds?.all} %</p>
                </div>
                <div className='item'>
                  <h3 className='title'>Wind Speed:</h3>
                  <p className='desc'>{item?.wind?.speed} m/s</p>
                </div>
                <div className='item'>
                  <h3 className='title'>Sea level:</h3>
                  <p className='desc'>{item?.main?.sea_level} m</p>
                </div>
                <div className='item'>
                  <h3 className='title'>Feels Like:</h3>
                  <p className='desc'>{item?.main?.feels_like} °C</p>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
