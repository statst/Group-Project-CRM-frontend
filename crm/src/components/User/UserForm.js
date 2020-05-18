import React from 'react';

const UserForm = ({ user, handleSubmit, handleChange }) => (
	<form onSubmit={handleSubmit}>
		<div className='form-row'>
			<div className='form-group col-md-6'>
				<label htmlFor='email'>First Name</label>
				<input
					type='firstname'
					className='form-control'
					id='firstname'
					placeholder='First Name'
					value={user.firstname}
					onChange={handleChange}
					name='firstname'
				/>
			</div>
			<div className='form-group col-md-6'>
				<label htmlFor='Lastname'>Last Name</label>
				<input
					type='lastname'
					className='form-control'
					id='lastname'
					placeholder='Last Name'
					value={user.lastname}
					onChange={handleChange}
					name='lastname'
				/>
			</div>
		</div>
		<div className='form-row'>
			<div className='form-group col-md-6'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					className='form-control'
					id='email'
					placeholder='Email'
					value={user.email}
					onChange={handleChange}
					name='email'
				/>
			</div>
		</div>
		<button type='submit'>Submit</button>
	</form>
);

export default UserForm;
