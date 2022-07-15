import React from "react";
import {FC, useState} from "react";

export const LocationSearch: FC = () => {
    const [LocationSearch, setLocationSearch] = useState('');
    const disableSearch = LocationSearch.trim() === '';
  return (
    <div>
      <label>
        Add Location
        <input className="ml-1 mr-1" type="text" value={LocationSearch}
               onChange={e => setLocationSearch(e.target.value)}/>
      </label>
      <button className="btn btn-primary"
              onClick={addLocation} disabled={disableSearch}>Search</button>
    </div>
  );
}