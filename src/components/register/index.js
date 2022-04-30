import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../header';
import axios from 'axios';
import './style.css';

const Register = () => {
	const [username, setUsername] = useState('');
	const [confirmedUsername, setConfirmedUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmedpassword, setConfirmedPassword] = useState('');

	let navigate = useNavigate();

	const register = async (e) => {
		e.preventDefault();
		try {
			if (username === confirmedUsername) {
				if (password === confirmedpassword) {
					await axios.post(`${process.env.REACT_APP_API_URL}signUp`, {
						username,
						password,
					});

					navigate('/login');
				} else {
					console.log('your password should matched');
				}
			} else {
				console.log('your username should matched');
			}
		} catch (error) {
			console.log(error.response.data);
		}
	};
	return (
		<>
			<div className="signUpbg"></div>
			<div className="signUpContainer">
				<div className="animatedSignGif"></div>
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
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Confirm Your Password..."
						onChange={(e) => setConfirmedPassword(e.target.value)}
						required
					/>
					<button>Register</button>
					<p>
						I already have an account?{' '}
						<span
							style={{ color: 'blue', cursor: 'pointer' }}
							onClick={() => navigate('/login')}
						>
							Login
						</span>
					</p>
				</form>
			</div>
		</>
	);
};

export default Register;
