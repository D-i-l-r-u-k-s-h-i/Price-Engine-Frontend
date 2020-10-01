import React from 'react';
import './App.css';
import {Router,Switch,Route} from 'react-router-dom'
import history from './history'
import HomePage from './modules/homepage';
import PriceEnginePage from './modules/priceenginepage';

function App() {
  return (
    <Router history={history}>
    <Switch>
      <Route index={1} exact path={'/'} component={HomePage}/>
      <Route index={1} exact path={'/calc'} component={PriceEnginePage}/>
      </Switch>
    </Router> 
  );
}

export default App;
