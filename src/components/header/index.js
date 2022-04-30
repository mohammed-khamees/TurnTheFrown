import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../reducers/auth';
import Logo from './../../assets/logo.png';
import './style.css';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const auth = useSelector((state) => {
		return state.auth;
	});

	const signOut = () => {
		dispatch(logout());
		navigate('./');
	};
	return (
		<nav>
			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
			{!auth.username ? (
				<ul className="options">
					<li onClick={() => navigate('./login')}>Login</li>
					<li onClick={() => navigate('./signUp')}>Register</li>
				</ul>
			) : (
				<ul className="options">
					<li>Hello {auth.username} </li>
					<li onClick={() => navigate('/dashboard')}>Heros Dashboard</li>
					<li onClick={() => navigate('/myScores')}>Your Scores</li>
					<li onClick={signOut}>Logout</li>
				</ul>
			)}
		</nav>
	);
};

export default Header;
