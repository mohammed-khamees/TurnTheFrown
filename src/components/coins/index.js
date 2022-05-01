import React from 'react';
import Coin from '../coin';
import './style.css';

const Coins = () => {
	return (
		<div className="coins">
			{[1, 2, 3, 4].map((item) => (
				<Coin coinNum={item} key={item} />
			))}
		</div>
	);
};

export default Coins;
