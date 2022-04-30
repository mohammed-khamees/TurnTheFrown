import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

const Dashboard = () => {
	const [records, setRecords] = useState([]);

	const auth = useSelector((state) => {
		return state.auth;
	});

	const getAllRecords = async () => {
		const result = await axios.get(`${process.env.REACT_APP_API_URL}records`);
		setRecords(result.data);
	};

	useEffect(() => {
		console.log(auth.username);
		getAllRecords();
	}, []);

	return (
		<table className="dashboard">
			<tr>
				<th>No.</th>
				<th>Username</th>
				<th>No. Of Turns</th>
			</tr>
			{records.map((record, index) => (
				<tr
					className={
						record.user.username === auth.username ? 'myUsername' : 'data'
					}
					key={index}
				>
					<td className="No">{index + 1}</td>
					<td className="username">{record.user.username}</td>
					<td className="amountOfTurn">{record.amountOfTurn}</td>
				</tr>
			))}
		</table>
	);
};

export default Dashboard;
