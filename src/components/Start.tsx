import React, { useEffect, useState } from 'react';
import redbild from '../img/claramiriam.jpg';
import redbild2 from '../img/miriamclara.jpg';
import acab from '../img/acabbild.jpg';
import nr3 from '../img/nr3bild.jpg';
import miriam from '../img/miriam.jpg';
import hållahand from '../img/hallahand.jpg';
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
			<img id="nyhetsbild" src={pic} alt="nyhetstext" />
			<div id="picturecontainer">
				<img src={redbild} alt="Bild på clara och miriam"></img>
				<img src={hållahand} alt="Clara och miriam håller hand"></img>
				<img src={acab} alt="ACAB bild"></img>
				<img src={redbild2} alt="En till bild på redaktörerna"></img>
				<img src={nr3} alt="Bild från tredje nummret"></img>
				<img src={miriam} alt="Bild på miriam som röker i sheetmask"></img>
			</div>
		</div>
	);
}
