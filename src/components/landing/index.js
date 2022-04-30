import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Header from '../header';
import './style.css';

function Landing() {
	const [model, setModel] = useState(false);
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
					if (auth.username) navigate('/game');
					else setModel(true);
				}}
				className="playBtn"
			>
				Let's Play
			</button>
			<div></div>

			{model && (
				<div className="hider">
					<AiOutlineClose
						className="close"
						onClick={() => {
							setModel(false);
						}}
					/>
					<div className="model">
						<p>Please Login First to start enjoying the Game</p>
						<button
							onClick={() => {
								setModel(false);
								navigate('/login');
							}}
						>
							Go to Login
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Landing;
