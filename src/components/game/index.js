import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Coins from './../coins';
import Counter from './../counter';
import FlipBtn from './../button';
import { clear, retry } from './../../reducers/coins';
import { useDispatch, useSelector } from 'react-redux';
import { BsInfoCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import './style.css';

const Game = () => {
	const [userHighestScore, setUserHighestScore] = useState('');
	const [win, setWin] = useState(false);
	const [instruction, setInstruction] = useState(false);

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

			if (result.data) setUserHighestScore(result.data.amountOfTurn);
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
			<div className="instruction" onClick={() => setInstruction(true)}>
				<BsInfoCircleFill />
				<p>How To pley</p>
			</div>

			{instruction && (
				<div className="hider">
					<AiOutlineClose
						className="close"
						onClick={() => {
							setInstruction(false);
						}}
					/>
					<div className="instructionModel">
						<p>1. to select a coin press on it.</p>
						<p>2. to unselect a coin re-press on it.</p>
						<p>3. you can't choose more than three.</p>
						<p>
							4. you can't press the flip button unless you've choosen three
							coins.
						</p>
						<p>5. each flip of three coin counted as a turn</p>
						<p>
							6. the game will end till you flip all the coins to the happy
							face.
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Game;
