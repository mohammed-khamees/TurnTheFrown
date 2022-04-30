import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../header';
import './style.css';

function Landing() {
	const navigate = useNavigate();

	const auth = useSelector((state) => {
		return state.auth;
	});

	return (
		<div className="Container">
			<Header />

			<p className="description">Learn, think and grow without limits</p>
			<button
				onClick={() => {
					if (auth.username) navigate('./game');
				}}
			>
				Let's Play
			</button>

			<footer>Copy right by ..</footer>
		</div>
	);
}

export default Landing;
