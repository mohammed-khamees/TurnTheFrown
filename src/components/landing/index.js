import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import FrownFace from './../../assets/FrownFace.gif';
import './style.css';

function Landing() {
	const [model, setModel] = useState(false);
	const navigate = useNavigate();

	const auth = useSelector((state) => {
		return state.auth;
	});

	return (
		<>
			<div className="Landingbg"></div>

			<div className="Container">
				<div className="animatedGIF">
					<img src={FrownFace} alt="animatedGIF" />
				</div>

				<div className="rules">
					<p>The Game rules:</p>
					<ul>
						<li>you have 4 coins.</li>
						<li>each coin has two faces sad face and happy face.</li>
						<li>at first all the coins will be on the sad face</li>
						<li>you should flip all the coins to the happy face</li>
						<li>on each flip you must flip three coins at the same time.</li>
						<li>
							you going to keep fliping the coins until you have four coins with
							happy faces.
						</li>
						<li>each three coins flip count as a turn.</li>
						<li>
							the least turns you have done to flip all of the coins to happy
							face the highest score you are going to get.
						</li>
					</ul>
					<button
						onClick={() => {
							if (auth.username) navigate('/game');
							else setModel(true);
						}}
						className="playBtn"
					>
						Let's Play
					</button>
				</div>

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
		</>
	);
}

export default Landing;
