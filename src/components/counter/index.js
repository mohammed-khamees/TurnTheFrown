import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

function CounterOfTurns({ counter }) {
	const coins = useSelector((state) => {
		return state.coins;
	});

	return (
		<div className="counter">
			<p>No. Of Turns: {coins.noOfTurns}</p>
		</div>
	);
}

export default CounterOfTurns;
