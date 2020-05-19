import React, { useState } from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AdminFeature from './pages/AdminFeature';
import VIPFeature from './pages/VIPFeature';
import Register from './pages/Register';


function App() {
  const [role, setRole] = useState('guest'); // guest, user, admin

  return (
    <div className="App">

      {/* <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component ={About} />
      <Route exact path='/AdminFeature' component = {AdminFeature} />
      <Route exact path='/VIPFeature' component = {VIPFeature} />
      <Redirect to='/'/>
      </Switch> */}
      <Register/>
     
    </div>
  );
}

export default App;
