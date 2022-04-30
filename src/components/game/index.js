import React, { useState, useEffect } from 'react';
import Coins from './../coins';
import Counter from './../counter';
import FlipBtn from './../button';
import {
	getSelectedCoins,
	addCoin,
	removeCoin,
	clear,
} from './../../reducers/coins';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const Game = () => {
	const [counter, setCounter] = useState(0);
	const dispatch = useDispatch();
	const selectedCoins = useSelector((state) => {
		return state.coins.selectedCoins;
	});

	const flip = () => {
		if (selectedCoins.length === 3) {
			dispatch(clear());
			count();
		} else {
			console.log('please choose 3 coins');
		}
	};

	const count = () => {
		setCounter(counter + 1);
	};

	return (
		<div className="game">
			<Coins />
			<Counter counter={counter} />
			<FlipBtn flip={flip} />
		</div>
	);
};

export default Game;
