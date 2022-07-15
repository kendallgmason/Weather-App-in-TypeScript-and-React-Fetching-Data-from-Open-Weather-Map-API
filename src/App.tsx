import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [LocationSearch, setLocationSearch] = useState('');
  const [Locations, setLocations] = useState<string[]>([]);
  const disableSearch = LocationSearch.trim() === '';
  const addLocation = () => {
  setLocations([LocationSearch, ...Locations]);
  setLocationSearch('');
};

  return (
    <div className="container">
    <h1>Weather App</h1>
    <div>
      <label>
        Add Location
        <input className="ml-1 mr-1" type="text" value={LocationSearch}
               onChange={e => setLocationSearch(e.target.value)}/>
      </label>
      <button className="btn btn-primary"
              onClick={addLocation} disabled={disableSearch}>Search</button>
    </div>

    <div>
      
    </div>
  </div>
  );
}




export default App;
