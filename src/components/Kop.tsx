import React, { useEffect, useState } from 'react';
import '../scss/kop.scss';

interface IMagazine {
	content: {
		Bild: {
			filename: string;
		};
		Nummer: Number;
		Utgiven: string;
	};
}
export default function Kop() {
	const [magazines, setMagazines] = useState<IMagazine[]>();
	useEffect(() => {
		fetch(
			`https://api.storyblok.com/v2/cdn/stories?starts_with=nummer&cv=${Date.now()}&token=${
				process.env.REACT_APP_TOKEN
			}&version=published`
		)
			.then((res) => res.json())
			.then((data) => setMagazines(data.stories));
	}, []);
	console.log(magazines);

	let magazineHtml = magazines?.map((mag, i) => {
		return (
			<div className="magazineWrapper" id={mag.content.Nummer.toString()}>
				<img
					src={mag.content.Bild.filename}
					alt={`Nummer ${mag.content.Nummer}, från ${mag.content.Utgiven}`}
				/>
				<div className="overlay">
					<p className="magInfo">
						NR.{mag.content.Nummer} <br /> {mag.content.Utgiven}
					</p>
				</div>
			</div>
		);
	});
	return (
		<>
			<div id="buyText">
				<p>
					<b>Obs.</b> skriv gärna till oss på våran mail eller på instagram för att kolla om vi har
					kvar av det numret du vill köpa.
				</p>
				<p>
					Swish till 0735287999 (Clara Christiansson Drake). Skriv adress och vilket/vilka nummer du
					vill ha i meddelandet av swishen.
				</p>
				<p id="price">
					<b>Pris:</b> 150kr/st
				</p>
			</div>

			<div id="magazineContainer">{magazineHtml}</div>
		</>
	);
}
