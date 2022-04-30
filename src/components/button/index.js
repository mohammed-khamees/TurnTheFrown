import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style.css';

function FilpBtn({ flip }) {
	const [hide, setHide] = useState(false);
	const navigate = useNavigate();

	const coins = useSelector((state) => {
		return state.coins;
	});

	useEffect(() => {
		if (coins.happyCoins.length === 4) {
			setHide(true);
		}
	}, [coins]);
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
