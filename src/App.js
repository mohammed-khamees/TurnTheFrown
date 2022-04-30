import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/login';
import Register from './components/register';
import Game from './components/game';
import Result from './components/result';
import Dashboard from './components/dashboard';
import UserDashboard from './components/UserDashboard';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signUp" element={<Register />} />
					<Route exact path="/game" element={<Game />} />
					<Route exact path="/result" element={<Result />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/myScores" element={<UserDashboard />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
