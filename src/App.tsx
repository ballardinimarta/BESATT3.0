import React, { useState } from 'react';
import './scss/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Start from './components/Start'
import OmOss from './components/OmOss'
import Kontakt from './components/Kontakt'
import Kop from './components/Kop'
import Prenumeration from './components/Prenumeration'
import Butiker from './components/Butiker'
import tukio from './img/tukio.jpg'
import rundvitlogga from './img/rundloggavit.svg'

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header>
       <a href="/"><div id="logoContainer"></div></a>
        {toggle && <button id="navBtn" onClick={() => {setToggle(!toggle)}}>Stäng</button>}
        {!toggle && <button id="navBtn" onClick={() => {setToggle(!toggle)}}>Meny</button>}
      </header>
      {toggle &&
        <div id="nav">
          <div>
            <a href="/">Hem</a>
            <a href="/kop">Köp</a>
            <a href="/butiker">Butiker</a>
            <a href="/prenumeration">Prenumeration</a>
            <a href="/omoss">Om oss</a>
            <a href="/kontakt">Kontakt</a>
          </div>
          <img src={rundvitlogga} alt="rund vit logga"></img>
        </div>
      }
      
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
      <footer>
        <a href="https://www.instagram.com/besatt.mag/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://open.spotify.com/user/eo63pypcciabqnw492jzeeq5z" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
        <a href="http://tukio.se/hosts/15" target="_blank" rel="noopener noreferrer"><img src={tukio} alt="tukiologga"/></a>
      </footer>
    </>
   
  );
}

export default App;
