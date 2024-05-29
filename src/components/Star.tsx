import React, { useEffect, useState } from 'react';
import LOGGOR2 from '../img/LOGGOR2.jpg';
import LOGGOR3 from '../img/LOGGOR3.jpg';
import fuck from '../img/fucku.png';
import '../scss/star.scss';
interface Item {
	content: {
		image: {
			filename: string;
		};
		youtubeUrl: string;
		description: string;
	};
}
const Star = () => {
	// const [items, setItems] = useState<Item[]>();
	// useEffect(() => {
	// 	fetch(
	// 		`https://api.storyblok.com/v2/cdn/stories?starts_with=arkiv&cv=${Date.now()}&token=${
	// 			process.env.REACT_APP_TOKEN
	// 		}&version=draft`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setItems(data.stories));
	// }, []);
	// const itemhtml = items?.map(({ content }) => {
	// 	if (content.image.filename !== '') return <img src={content.image.filename} />;
	// 	if (content.youtubeUrl)
	// 		return (
	// 			<iframe
	// 				src={content.youtubeUrl}
	// 				title="YouTube video player"
	// 				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	// 			></iframe>
	// 		);
	// 	return null;
	// });
	return (
		<div className="gallery">
			<img src={LOGGOR3} alt="stjärna" />
			<img src={LOGGOR2} alt="stjärna" />
			<img src={fuck} alt="stjärna" />

			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/UGCgogOZ3CU?si=fenQ75Xw96NK_Pvh"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default Star;
