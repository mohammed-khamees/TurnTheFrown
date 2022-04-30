import React from 'react';
import './style.css';

function CounterOfTurns({ counter }) {
	return (
		<div className="counter">
			<p>{counter}</p>
		</div>
	);
}

export default CounterOfTurns;
