import React, { useState, useEffect } from 'react';
import { ReactComponent as HappyFace } from './../../assets/coin-happy.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../reducers/auth';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import './style.css';

const Header = () => {
	const [userHighestScore, setUserHighestScore] = useState('');
	const [toggle, setToggle] = useState(false);
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

		setUserHighestScore(result.data.amountOfTurn);
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
				<p>Turn The Frown</p>
			</div>

			<FaBars onClick={() => setToggle(true)} className="bars" />

			{toggle && (
				<div className="sideNav">
					<AiOutlineClose
						className="closeNav"
						onClick={() => {
							setToggle(false);
						}}
					/>
					{!auth.username ? (
						<ul className="options">
							<li
								onClick={() => {
									setToggle(false);
									navigate('/');
								}}
							>
								Home
							</li>
							<li
								onClick={() => {
									setToggle(false);
									navigate('/login');
								}}
							>
								Login
							</li>
							<li
								onClick={() => {
									setToggle(false);
									navigate('/signUp');
								}}
							>
								Register
							</li>
						</ul>
					) : (
						<ul className="options">
							<li className="profile">
								Hello {auth.username}{' '}
								<span className="highestScore">
									Your Highest Score: ({userHighestScore} turns)
								</span>
							</li>
							<li
								onClick={() => {
									setToggle(false);
									navigate('/');
								}}
							>
								Home
							</li>
							<li
								onClick={() => {
									setToggle(false);
									navigate('/dashboard');
								}}
							>
								Heros Dashboard
							</li>
							<li
								onClick={() => {
									setToggle(false);
									signOut();
								}}
							>
								Logout
							</li>
						</ul>
					)}
				</div>
			)}
		</nav>
	);
};

export default Header;
