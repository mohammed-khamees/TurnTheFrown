import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Coins from './../coins';
import Counter from './../counter';
import FlipBtn from './../button';
import { clear } from './../../reducers/coins';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const Game = () => {
	const [counter, setCounter] = useState(0);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const coins = useSelector((state) => {
		return state.coins;
	});

	const flip = () => {
		const happyCoins = [...coins.happyCoins];

		if (coins.selectedCoins.length === 3) {
			count();

			for (let index = 0; index < coins.selectedCoins.length; index++) {
				if (!happyCoins.includes(coins.selectedCoins[index])) {
					happyCoins.push(coins.selectedCoins[index]);
				} else {
					happyCoins.splice(happyCoins.indexOf(coins.selectedCoins[index]), 1);
				}
			}

			dispatch(clear(happyCoins));
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
