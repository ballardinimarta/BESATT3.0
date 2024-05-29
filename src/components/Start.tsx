import React, { useEffect, useState } from 'react';
import redbild from '../img/claramiriam.jpg';
import forever from '../img/besatt4ever.png';
import acab from '../img/acabbild.jpg';
import nr3 from '../img/nr3bild.jpg';
import miriam from '../img/miriam.jpg';
import doggystyle from '../img/doggystyle.jpg';
import miriamclara from '../img/FE_Besatt_32.jpg';
import redarcade from '../img/arcadered.png';

import '../scss/start.scss';
export default function Start() {
	const [pic, setPic] = useState('');
	useEffect(() => {
		fetch(
			`https://api.storyblok.com/v2/cdn/stories/nyhet?cv=${Date.now()}&token=${
				process.env.REACT_APP_TOKEN
			}&version=published`
		)
			.then((res) => res.json())
			.then((data) => setPic(data?.story?.content.bild.filename));
	}, []);
	return (
		<div id="container">
			{/* <img id="nyhetsbild" src={pic} alt="nyhetstext" /> */}
			<div id="picturecontainer">
				<img src={miriamclara} alt="Bild på clara och miriam"></img>
				<img src={redarcade} alt="Clara och miriam"></img>
				<img src={doggystyle} alt="Utdrag från tidning"></img>
				<img src={forever} alt="Utdrag från tidning"></img>
				<img src={acab} alt="ACAB bild"></img>
			</div>
		</div>
	);
}
