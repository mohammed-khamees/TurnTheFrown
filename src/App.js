import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactComponent as Happy } from './assets/coin-happy.svg';
import { ReactComponent as Sad } from './assets/coin-sad.svg';
import Login from './components/login';
import Register from './components/register';

import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/signUp" element={<Register />} />
				{/* <Route path="/" element={< />} />
				<Route path="/game" element={< />} />
				<Route path="/result" element={< />} /> */}
			</Routes>
		</div>
	);
}

export default App;
