import React, { useEffect } from 'react';
import { ReactComponent as HappyFace } from './../../assets/coin-happy.svg';
import { ReactComponent as SadFace } from './../../assets/coin-sad.svg';
import { toggleCoin } from './../../reducers/coins';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

function Coin({ coinNum }) {
	const dispatch = useDispatch();

	const selectedCoins = useSelector((state) => {
		return state.coins.selectedCoins;
	});

	useEffect(() => {
		console.log(selectedCoins);
	}, [selectedCoins]);

	const choosenCoins = () => {
		dispatch(toggleCoin(coinNum));
	};

	return (
		<div className="coin" onClick={choosenCoins}>
			<HappyFace className="happy" />
			<SadFace className="sad" />
		</div>
	);
}

export default Coin;
