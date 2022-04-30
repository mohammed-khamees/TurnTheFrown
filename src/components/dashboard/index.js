import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Dashboard = () => {
	const [records, setRecords] = useState([]);

	const getAllRecords = async () => {
		const result = await axios.get(`${process.env.REACT_APP_API_URL}records`);
		setRecords(result.data);
	};

	useEffect(() => {
		getAllRecords();
	}, []);

	return (
		<div className="dashboard">
			<table>
				<tr>
					<th>No.</th>
					<th>Username</th>
					<th>No. Of Turns</th>
				</tr>
				{records.map((record, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{record.user.username}</td>
						<td>{record.amountOfTurn}</td>
					</tr>
				))}
			</table>
		</div>
	);
};

export default Dashboard;
