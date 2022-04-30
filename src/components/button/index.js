import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

function FilpBtn({ flip }) {
	const [hide, setHide] = useState(false);
	const [userHighestScore, setUserHighestScore] = useState('');

	const state = useSelector((state) => {
		return state;
	});

	const addNewRecord = async () => {
		try {
			await axios.post(
				`${process.env.REACT_APP_API_URL}records`,
				{ user: state.auth.userId, amountOfTurn: state.coins.noOfTurns },
				{
					headers: {
						Authorization: `Bearer ${state.auth.token}`,
					},
				},
			);
		} catch (error) {
			console.log(error);
		}
	};

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

	useEffect(() => {
		getUserHighestScore();
		if (state.coins.happyCoins.length === 4) {
			if (state.coins.noOfTurns < userHighestScore) {
				addNewRecord();
			}
			setHide(true);
		}
		// eslint-disable-next-line
	}, [state.coins]);

	return (
		<>
			{!hide ? (
				<button className="flipBtn" onClick={flip}>
					Flip
				</button>
			) : (
				<p>you win</p>
			)}
		</>
	);
}

export default FilpBtn;
