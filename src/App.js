import Search from './components/search/Search';

function App() {
  const onSearchCityChange = (city) => {};
  return (
    <div className='container'>
      <Search onSearchCityChange={onSearchCityChange} />
    </div>
  );
}

export default App;
