import './App.css';
import moon_icon from './icons/moon.png';
import CountryInfoComponent from './CountryInfoComponent/CountryInfoComponent';
import MainComponent from './MainComponent/MainComponent';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function switchMode() {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  if(currentTheme === 'dark')
      document.documentElement.setAttribute('data-theme', 'light');
  else 
      document.documentElement.setAttribute('data-theme', 'dark');
}
function App() {
  return (
    <div>
      <header>
        <h1>Where in the world?</h1>
        <div onClick={switchMode} id="mode_switcher"><img width="20px" alt="" src={moon_icon}/> Dark Mode</div>
      </header>
      <Router>
        <Route path="/country/:countryName">
          <CountryInfoComponent />
        </Route>
        <Route exact path="/">
          <MainComponent />
        </Route>
      </Router>
    </div>
    
  );
}

export default App;
