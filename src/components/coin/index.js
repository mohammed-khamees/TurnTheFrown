import React from 'react';
import { ReactComponent as HappyFace } from './../../assets/coin-happy.svg';
import { ReactComponent as SadFace } from './../../assets/coin-sad.svg';
import { toggleCoin } from './../../reducers/coins';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const Coin = ({ coinNum }) => {
	const dispatch = useDispatch();

	const coins = useSelector((state) => {
		return state.coins;
	});

	const choosenCoins = () => {
		dispatch(toggleCoin(coinNum));
	};

	return (
		<div
			className={
				coins.happyCoins && coins.selectedCoins.includes(coinNum)
					? 'coinSelected'
					: 'coin'
			}
			onClick={choosenCoins}
		>
			{coins.happyCoins && coins.happyCoins.includes(coinNum) ? (
				<HappyFace className="happy" />
			) : (
				<SadFace className="sad" />
			)}
		</div>
	);
};

export default Coin;
