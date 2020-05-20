import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../../config';

const NewTransaction = (props) => {
	const initialTransactionState = {
		user: '',
		client: '',
		product: '',
		price: '',
	};
	const [transaction, setTransaction] = useState(initialTransactionState);
	const [createdId, setCreatedId] = useState(null);
	const [client, setClient] = useState(null);
	const emailId = props.match.params.emailId;

	useEffect(() => {
		console.log('emailID: ', emailId);
		const url = `${APIURL}/api/clients/${emailId}`;
		fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setClient(data);
				setTransaction({
					user: '',
					client: `${data._id}`,
					product: '',
					price: '',
				});
			})
			.then()
			.catch((error) => console.error);
		// eslint-disable-next-line
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/api/transactions`;

		fetch(url, {
			// mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Accept: 'application/json',
				Authorization: `Bearer ${props.userToken}`,
			},
			body: JSON.stringify(transaction),
		})
			.then((response) => response.json())

			.then((data) => {
				console.log('data', data);
				setCreatedId(data._id);
			})
			.catch((error) => console.error);
	};

	const handleChange = (event) => {
		event.persist();

		setTransaction({
			...transaction,
			[event.target.name]: event.target.value,
		});
		console.log('transaction: ', transaction);
	};

	if (createdId) {
		return <Redirect to={`/api/clients/${emailId}`} />;
	}

	return (
		<>
			{!client ? (
				''
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						className='form-control'
						id='clientid'
						placeholder='Client ID'
						value={client._id}
						onChange={handleChange}
						name='client'
						required
					/>

					<input
						type='text'
						className='form-control'
						id='userid'
						placeholder='UserID'
						value={transaction.user}
						onChange={handleChange}
						name='user'
						// required
					/>
					<input
						type='text'
						className='form-control'
						id='product'
						placeholder='Product Name'
						value={transaction.product}
						onChange={handleChange}
						name='product'
						required
					/>
					<input
						type='text'
						className='form-control'
						id='price'
						placeholder='Price'
						value={transaction.price}
						onChange={handleChange}
						name='price'
						required
					/>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			)}
		</>
	);
};

export default NewTransaction;
