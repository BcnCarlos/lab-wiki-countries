//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import CountriesList from './components/CountriesList';

import CountryDetails from './components/CountryDetails';

import countriesData from './countries.json';


function App() {
  // <Route path={"/"} render={(props)=> <CountriesList{...props} lisofcountires={countriesData} />}/>
  //
  //      <Navbar/>
  //      <CountriesList />
  //      <Route path={"/:id"} render={ (props) => <CountryDetails {...props} data={countriesData} /> } />

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <CountriesList countries={countriesData} />
          </div>
          <div className="col">
            <Switch>
              <Route exact path="/" />
              <Route exact path={'/:id'}
                render={(props) => (
                  <CountryDetails {...props} countries={countriesData} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

// <CountryDetails {...props} countries={countriesDB} /> --> Explanation of what it is by element ⬇️⬇️
// Function ----> Group of parameters ({...props}) // single parameters parameterName={dataWePass}

export default App;
