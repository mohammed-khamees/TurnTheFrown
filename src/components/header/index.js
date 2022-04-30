import React, { useState, useEffect } from 'react';
import { ReactComponent as HappyFace } from './../../assets/coin-happy.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../reducers/auth';
import axios from 'axios';
import './style.css';

const Header = () => {
	const [userHighestScore, setUserHighestScore] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const auth = useSelector((state) => {
		return state.auth;
	});

	const getUserHighestScore = async () => {
		const result = await axios.get(
			`${process.env.REACT_APP_API_URL}records/${auth.userId}`,
			{
				headers: {
					Authorization: `Bearer ${auth.token}`,
				},
			},
		);
		setUserHighestScore(result.data[0].amountOfTurn);
	};

	useEffect(() => {
		getUserHighestScore();
	}, []);

	const signOut = () => {
		dispatch(logout());
		navigate('/');
	};

	return (
		<nav>
			<div className="logoContainer" onClick={() => navigate('/')}>
				<HappyFace className="logo" />
				{auth.username && (
					<p>
						Hello {auth.username} ({userHighestScore} turns)
					</p>
				)}
			</div>
			{!auth.username ? (
				<ul className="options">
					<li onClick={() => navigate('/')}>Home</li>
					<li onClick={() => navigate('/login')}>Login</li>
					<li onClick={() => navigate('/signUp')}>Register</li>
				</ul>
			) : (
				<ul className="options">
					<li onClick={() => navigate('/dashboard')}>Heros Dashboard</li>
					<li onClick={signOut}>Logout</li>
				</ul>
			)}
		</nav>
	);
};

export default Header;
