import React from 'react';
import star from '../img/star.png';
import heart from '../img/heart.png';

import './../scss/merch.scss';
const Merch = () => {
	return (
		<div>
			<div className="merch-container">
				<img src={star} alt="stjärna" />
				<img src={heart} alt="hjärta" />
			</div>
		</div>
	);
};

export default Merch;
