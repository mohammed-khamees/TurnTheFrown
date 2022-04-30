import React from 'react';
import Coins from './../coins';
import Counter from './../counter';
import FlipBtn from './../button';
import { clear } from './../../reducers/coins';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const Game = () => {
	const dispatch = useDispatch();

	const coins = useSelector((state) => {
		return state.coins;
	});

	const flip = () => {
		const happyCoins = [...coins.happyCoins];

		if (coins.selectedCoins.length === 3) {
			for (let index = 0; index < coins.selectedCoins.length; index++) {
				if (!happyCoins.includes(coins.selectedCoins[index])) {
					happyCoins.push(coins.selectedCoins[index]);
				} else {
					happyCoins.splice(happyCoins.indexOf(coins.selectedCoins[index]), 1);
				}
			}

			dispatch(clear({ happyCoins, noOfTurns: coins.noOfTurns + 1 }));
		} else {
			console.log('please choose 3 coins');
		}
	};

	return (
		<div className="game">
			<Counter />
			<Coins />
			<FlipBtn flip={flip} />
		</div>
	);
};

export default Game;
