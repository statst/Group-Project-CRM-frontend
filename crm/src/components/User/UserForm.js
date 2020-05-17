import React from 'react';

const UserForm = ({ user, handleSubmit, handleChange }) => (
	<form onSubmit={handleSubmit}>
		<label htmlFor='title'>Title</label>
		<input
			placeholder='User'
			value={user.firstname}
			name='name'
			onChange={handleChange}
			required
			id='name'
		/>

		<label htmlFor='lastname'>Director</label>
		<input
			placeholder='Last Name'
			value={user.lastname}
			name='lastname'
			onChange={handleChange}
			id='lastname'
		/>

		<button type='submit'>Submit</button>
	</form>
);

export default UserForm;
