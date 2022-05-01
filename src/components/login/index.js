import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './../../reducers/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const signIn = async (e) => {
		e.preventDefault();

		try {
			const user = await axios.post(`${process.env.REACT_APP_API_URL}login`, {
				username,
				password,
			});

			dispatch(login(user.data));
			navigate('/');
		} catch (error) {
			console.log(error.response.data);
		}
	};

	return (
		<>
			<div className="loginbg"></div>

			<div className="loginContainer">
				<div className="animatedSignGif"></div>
				<form className="loginForm" onSubmit={signIn}>
					<input
						type="text"
						placeholder="Enter Your Username..."
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Enter Your Password..."
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button>Login</button>
					<p>
						Don't have an Account?{' '}
						<span
							style={{ color: 'blue', cursor: 'pointer' }}
							onClick={() => navigate('/signUp')}
						>
							Register
						</span>
					</p>
				</form>
			</div>
		</>
	);
};

export default Login;
