import './App.css';
import moon_icon from './icons/moon.png';
import CountriesComponent from './CountriesComponent/CountriesComponent';
import CountryInfoComponent from './CountryInfoComponent/CountryInfoComponent';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function switchMode() {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  if(currentTheme === 'dark')
      document.documentElement.setAttribute('data-theme', 'light');
  else 
      document.documentElement.setAttribute('data-theme', 'dark');
}

function App() {
  const [inputCountryValue, setCountryName] = useState("");
  const [selectedRegion, setRegion] = useState("")

  return (
    <div>
      <header>
          <h1>Where in the world?</h1>
          <div onClick={switchMode} id="mode_switcher"><img width="20px" alt="" src={moon_icon}/> Dark Mode</div>
      </header>
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

      <Router>
          <Route exact path="/info">
            <CountryInfoComponent />
          </Route>
          {/* <Route path="/">
            <App />
          </Route> */}
    </Router>
    </div>
    
  );
}

export default App;
