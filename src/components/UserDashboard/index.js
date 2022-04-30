import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

const UserDashboard = () => {
	const [records, setRecords] = useState([]);

	const auth = useSelector((state) => {
		return state.auth;
	});

	const getUserRecords = async () => {
		const result = await axios.get(
			`${process.env.REACT_APP_API_URL}records/${auth.userId}`,
			{
				headers: {
					Authorization: `Bearer ${auth.token}`,
				},
			},
		);
		setRecords(result.data);
	};

	useEffect(() => {
		getUserRecords();
	}, []);

	return (
		<div className="UserDashboard">
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

export default UserDashboard;
