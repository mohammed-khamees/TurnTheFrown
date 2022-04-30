import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ReactComponent as Happy } from './assets/coin-happy.svg';
import { ReactComponent as Sad } from './assets/coin-sad.svg';

function App() {
	return (
		<div className="App">
			<h1>Welcome to React Router!</h1>
			<Routes>
				{/* <Route path="/" element={< />} />
				<Route path="/register" element={< />} />
				<Route path="/game" element={< />} />
				<Route path="/result" element={< />} /> */}
			</Routes>
		</div>
	);
}

export default App;
