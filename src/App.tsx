import React, { useState } from 'react';
import './scss/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Start from './components/Start';
import OmOss from './components/OmOss';
import Arkiv from './components/Arkiv';
import Butiker from './components/Butiker';
import rundvitlogga from './img/rundloggavit.svg';
import FragaBesatt from './components/FragaBesatt';
import Merch from './components/Merch';
import star from './img/Red_star.png';
import Star from './components/Star';
function App() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<header>
				<a href="/">
					<div id="logoContainer"></div>
				</a>
				{toggle && (
					<button
						id="navBtn"
						onClick={() => {
							setToggle(!toggle);
						}}
					>
						Stäng
					</button>
				)}
				{!toggle && (
					<button
						id="navBtn"
						onClick={() => {
							setToggle(!toggle);
						}}
					>
						Meny
					</button>
				)}
			</header>
			{toggle && (
				<div id="nav">
					<div>
						<a href="/">Hem</a>
						<a href="/arkiv">Arkiv</a>
						<a href="/butiker">Butiker</a>
						<a href="/omoss">Om oss</a>
						<a href="/star">
							<img src={star} alt="stjärna" />
						</a>
					</div>
					<img src={rundvitlogga} alt="rund vit logga"></img>
				</div>
			)}

			<Router>
				<Switch>
					<Route exact path="/">
						<Start></Start>
					</Route>
					<Route exact path="/merch">
						<Merch></Merch>
					</Route>
					<Route path="/omoss">
						<OmOss></OmOss>
					</Route>

					<Route exact path="/arkiv">
						<Arkiv></Arkiv>
					</Route>
					<Route exact path="/butiker">
						<Butiker></Butiker>
					</Route>
					<Route exact path="/star">
						<Star></Star>
					</Route>

					<Route exact path="/fragabesatt">
						<FragaBesatt></FragaBesatt>
					</Route>
				</Switch>
			</Router>
			<footer>
				<a href="https://www.instagram.com/besatt.mag/" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://open.spotify.com/user/eo63pypcciabqnw492jzeeq5z"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-spotify"></i>
				</a>
				<a
					href="https://www.youtube.com/@besattmagazine4842"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-youtube"></i>
				</a>
				<a target="_blank" rel="noreferrer" href="mailto:besattmagazine@gmail.com">
					<i className="fa fa-envelope"></i>
				</a>
			</footer>
		</>
	);
}

export default App;
