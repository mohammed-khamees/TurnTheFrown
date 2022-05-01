import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Coins from './../coins';
import Counter from './../counter';
import FlipBtn from './../button';
import { clear, retry } from './../../reducers/coins';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

const Game = () => {
	const [userHighestScore, setUserHighestScore] = useState('');
	const [win, setWin] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const state = useSelector((state) => {
		return state;
	});

	const getUserHighestScore = async () => {
		try {
			const result = await axios.get(
				`${process.env.REACT_APP_API_URL}records/${state.auth.userId}`,
				{
					headers: {
						Authorization: `Bearer ${state.auth.token}`,
					},
				},
			);

			setUserHighestScore(result.data.amountOfTurn);
		} catch (error) {
			console.log(error);
		}
	};

	const flip = () => {
		const happyCoins = [...state.coins.happyCoins];

		if (state.coins.selectedCoins.length === 3) {
			for (let index = 0; index < state.coins.selectedCoins.length; index++) {
				if (!happyCoins.includes(state.coins.selectedCoins[index])) {
					happyCoins.push(state.coins.selectedCoins[index]);
				} else {
					happyCoins.splice(
						happyCoins.indexOf(state.coins.selectedCoins[index]),
						1,
					);
				}
			}

			dispatch(clear({ happyCoins, noOfTurns: state.coins.noOfTurns + 1 }));
		} else {
			console.log('please choose 3 coins');
		}
	};

	useEffect(() => {
		if (!state.auth.token) navigate('/');

		getUserHighestScore();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			{win && (
				<div className="winBg">
					<p>Congratulations You Won !!</p>
					{state.coins.noOfTurns < userHighestScore && (
						<p className="newRecord">You've Got a new Record</p>
					)}
					<button
						onClick={() => {
							dispatch(retry());
							setWin(false);
						}}
					>
						Play Again
					</button>
				</div>
			)}
			<div className="game">
				<Counter />
				<Coins />
				<FlipBtn
					flip={flip}
					userHighestScore={userHighestScore}
					setWin={setWin}
				/>
			</div>
		</>
	);
};

export default Game;
