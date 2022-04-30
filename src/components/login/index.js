import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [passward, setPassward] = useState('');
	let navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();

		try {
			if (username && passward) {
				navigate('/signUp');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="loginContainer">
			<form className="loginForm" onSubmit={login}>
				<input
					type="text"
					placeholder="Enter Your Username..."
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Enter Your Password..."
					onChange={(e) => setPassward(e.target.value)}
					required
				/>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
