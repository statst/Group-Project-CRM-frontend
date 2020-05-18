import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config.js';
import UserForm from './UserForm.js';

const UserEdit = ({ match }) => {
	const [user, setUser] = useState(null);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/users/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setUser({ firstname: data.firstname, lastname: data.lastname });
			})
			.catch(() => {
				// Update the state if there was an error
				// so we can give feedback to the user!
				setError(true);
			});
	}, []);

	const handleChange = (event) => {
		event.persist();
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/users/`;

		fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				setCreatedId(data._id);
			})
			.catch(() => {
				// Update the state if there was an error
				// so we can give feedback to the user!
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/users/${createdId}`} />;
	}
	return (
		<>
			<h3>Create a User</h3>
			{error && <p>Something went wrong... Please try again!</p>}
			{user && (
				<UserForm
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</>
	);
};

export default UserEdit;
