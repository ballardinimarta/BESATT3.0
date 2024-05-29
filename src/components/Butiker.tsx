import React, { useEffect, useState } from 'react';
import './../scss/butiker.scss';

interface Butik {
	content: {
		Adress: string;
		Namn: string;
		Stad: string[];
	};
}
export default function Butiker() {
	const [butiker, setButiker] = useState<Butik[]>();
	useEffect(() => {
		fetch(
			`https://api.storyblok.com/v2/cdn/stories?starts_with=butiker&cv=${Date.now()}&token=${
				process.env.REACT_APP_TOKEN
			}&version=published`
		)
			.then((res) => res.json())
			.then((data) => setButiker(data.stories));
	}, []);
	function renderStore(store: Butik, city: string, index: number) {
		return (
			<>
				{store.content.Stad[0] === city && (
					<div className="storeContainer" key={city + index}>
						<h3 className="storeName">{store.content.Namn}</h3>
						<a
							className="storeAdress"
							target="_blank"
							href={`https://www.google.se/maps/place/${store.content.Adress}`}
							rel="noreferrer"
						>
							{store.content.Adress}
						</a>
					</div>
				)}
			</>
		);
	}
	let sthmlhtml = butiker?.map((b, i) => {
		return renderStore(b, 'stockholm', i);
	});
	let skanehtml = butiker?.map((b, i) => {
		return renderStore(b, 'skane', i);
	});
	let gbghtml = butiker?.map((b, i) => {
		return renderStore(b, 'goteborg', i);
	});
	let svhtml = butiker?.map((b, i) => {
		return renderStore(b, 'sverige', i);
	});
	return (
		<>
			<p>Besatt säljs för tillfället endast i butiker.</p>
			<p>
				Är du en butik och vill sälja Besatt? Kontakta vår distributör Nätverkstan ({' '}
				<a href="https://www.natverkstan.net/">https://www.natverkstan.net/</a>).
			</p>
			<p>Finns Besatt inte i din hemstad? Be din lokala tidningsbutik köpa in oss!</p>
			<p>
				Ibland säljer vi Besatt i andra sammanhang (pop-up butiker, marknader, fester), då lägger vi
				upp det på vår instagram!
			</p>
			<div id="butikercontainer">
				<div className="cityContainer" id="stockholm">
					<h1>Stockholm</h1>
					{sthmlhtml}
				</div>
				<div className="cityContainer" id="skåne">
					<h1>Skåne</h1>
					{skanehtml}
				</div>
				<div className="cityContainer" id="göteborg">
					<h1>Göteborg</h1>
					{gbghtml}
				</div>
				<div className="cityContainer" id="övriga sverige">
					<h1>Övriga Sverige</h1>
					{svhtml}
				</div>
			</div>
		</>
	);
}
