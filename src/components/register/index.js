import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Register() {
	const [username, setUsername] = useState('');
	const [confirmedUsername, setConfirmedUsername] = useState('');
	const [passward, setPassward] = useState('');
	const [confirmedPassward, setConfirmedPassward] = useState('');

	let navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();
		try {
			if (username === confirmedUsername) {
				if (passward === confirmedPassward) {
					navigate('/game');
				} else {
					console.log('your password should matched');
				}
			} else {
				console.log('your username should matched');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="signUpContainer">
			<form className="signUpForm" onSubmit={register}>
				<input
					type="text"
					placeholder="Enter Your Username..."
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="Confirm Your Username..."
					onChange={(e) => setConfirmedUsername(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Enter Your Password..."
					onChange={(e) => setPassward(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Confirm Your Password..."
					onChange={(e) => setConfirmedPassward(e.target.value)}
					required
				/>
				<button>Register</button>
			</form>
		</div>
	);
}

export default Register;
