import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiConfig } from '../../api/ApiConfig';
import { MIN_POPULATION } from '../../utils';

export default function Search({ onSearchCityChange }) {
  const [search, setSearch] = useState('');
  // ------------------------------------------------------------------->
  const handelOnChange = (city) => {
    setSearch(city);
    onSearchCityChange(city);
  };
  // ------------------------------------------------------------------->
  const loadAllOptions = async (city) => {
    try {
      const res = await geoApiConfig.get(
        `cities?minPopulation=${MIN_POPULATION}&namePrefix=${city}`
      );
      return {
        options: res.data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {}
  };
  return (
    <AsyncPaginate
      placeholder='Please enter your city....'
      debounceTimeout={600}
      value={search}
      inputValue={search}
      onChange={handelOnChange}
      loadOptions={loadAllOptions}
    />
  );
}
