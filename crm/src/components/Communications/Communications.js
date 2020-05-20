import React, { useState, useEffect } from 'react';
import { APIURL } from '../../config';

import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Transactions(props) {
	const [communications, setCommunications] = useState([]);
	const [error, setError] = useState(false);
	console.log('props', props);
	const emailId = props.emailId;

	useEffect(() => {
		fetchMyApi();
	}, []);

	async function fetchMyApi() {
		await fetch(`${APIURL}/api/users/${emailId}/communications`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setTransactions(data);
			})
			.catch(() => {
				setError(true);
			});
	}

	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Subject</th>
						<th>Body</th>
					</tr>
				</thead>
				{transactions.map((trans) => (
					<tbody key={trans._id}>
						<tr>
							<td>{trans._id}</td>
							<td>{trans.subject}</td>
							<td>{trans.body}</td>
						</tr>
					</tbody>
				))}
			</Table>
		</div>
	);
}

export default Communications;
