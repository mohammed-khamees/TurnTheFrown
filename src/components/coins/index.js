import React from 'react';
import Coin from '../coin';
import './style.css';

function Coins({}) {
	return (
		<div className="coins">
			{[1, 2, 3, 4].map((item) => (
				<Coin coinNum={item} key={item} />
			))}
		</div>
	);
}

export default Coins;
