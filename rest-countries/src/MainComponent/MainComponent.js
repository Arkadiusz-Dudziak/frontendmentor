// import './App.css';
import moon_icon from '../icons/moon.png';
import CountriesComponent from '../CountriesComponent/CountriesComponent';
import { useState } from 'react';

function MainComponent() {
  const [inputCountryValue, setCountryName] = useState("");
  const [selectedRegion, setRegion] = useState("")

  return (
    <div>
        <input type="text" 
        placeholder="Search for a country..." 
        value={inputCountryValue}
        onChange={e => setCountryName(e.target.value)}
        />
        <select id="regionFilter" value={selectedRegion} onChange={e => setRegion(e.target.value)}>
        <option value="" selected disabled hidden>
            Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>

        <div className="main">
            <CountriesComponent inputCountryValue={inputCountryValue} selectedRegion={selectedRegion}/>
        </div>
    </div>
  );
}

export default MainComponent;