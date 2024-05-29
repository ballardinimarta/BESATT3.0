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
export default function Arkiv() {
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
			<div id="magazineContainer">{magazineHtml}</div>
		</>
	);
}
