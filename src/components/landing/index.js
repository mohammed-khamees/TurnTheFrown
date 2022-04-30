import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Logo from './../../assets/logo.png';

function Landing() {
	const navigate = useNavigate();

	return (
		<div className="Container">
			<nav>
				<div className="logo">
					<img src={Logo} alt="Logo" />
				</div>
				<ul className="options">
					<li onClick={() => navigate('./login')}>Login</li>
					<li onClick={() => navigate('./signUp')}>Register</li>
				</ul>
			</nav>

			<p className="description">Learn, think and grow without limits</p>
			<button onClick={() => navigate('./game')}>Let's Play</button>

			<footer>Copy right by ..</footer>
		</div>
	);
}

export default Landing;
