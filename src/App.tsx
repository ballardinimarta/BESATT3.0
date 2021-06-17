import React from 'react';
import './scss/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Start from './components/Start'
import OmOss from './components/OmOss'
import Kontakt from './components/Kontakt'
import Kop from './components/Kop'
import Prenumeration from './components/Prenumeration'
import Butiker from './components/Butiker'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start></Start>
        </Route>
        <Route path="/omoss">
          <OmOss></OmOss>
        </Route>
        <Route path="/kontakt">
          <Kontakt></Kontakt>
        </Route>
        <Route exact path="/kop">
          <Kop></Kop>
        </Route>
        <Route exact path="/prenumeration">
          <Prenumeration></Prenumeration>
        </Route>
        <Route exact path="/butiker">
          <Butiker></Butiker>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
