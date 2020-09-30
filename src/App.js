import React from 'react';
import './App.css';
import {Router,Switch,Route} from 'react-router-dom'
import history from './history'
import HomePage from './modules/homepage';

function App() {
  return (
    <Router history={history}>
    <Switch>
      <Route index={1} exact path={'/'} component={HomePage}/>
    
      </Switch>
    </Router> 
  );
}

export default App;
