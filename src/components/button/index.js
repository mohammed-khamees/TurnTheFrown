import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

function FilpBtn({ flip, userHighestScore, setWin }) {
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

	useEffect(() => {
		if (state.coins.happyCoins.length === 4) {
			if (state.coins.noOfTurns < userHighestScore) {
				addNewRecord();
			}
			setWin(true);
		}
		// eslint-disable-next-line
	}, [state.coins]);

	return (
		<>
			<button className="flipBtn" onClick={flip}>
				Flip
			</button>
		</>
	);
}

export default FilpBtn;
