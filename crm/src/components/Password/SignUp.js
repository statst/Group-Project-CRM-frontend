import React, { Component } from 'react';
import './Password.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			username: '',
			password: '',
			passwordConfirm: '',
			valid: true,
			submit: false,
		};
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	checkPassword = (event) => {
		event.preventDefault();
		this.state.password === this.state.passwordConfirm
			? this.setState({ valid: true, submit: true })
			: this.setState({ valid: false, submit: true });
	};

	render() {
		return (
			<div className='form'>
				<h1>Sign Up</h1>
				<form onSubmit={this.checkPassword}>
					<input
						type='text'
						placeholder='First Name'
						id='firstname'
						name='firstname'
						value={this.state.firstname}
						onChange={this.handleChange}
					/>
					<label htmlFor='firstname'>First Name</label>
					<input
						type='text'
						placeholder='Last Name'
						id='lastname'
						name='lastname'
						value={this.state.lastname}
						onChange={this.handleChange}
					/>
					<label htmlFor='lastname'>Last Name</label>
					<input
						type='text'
						placeholder='Email'
						id='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<label htmlFor='lastname'>Email</label>
					<input
						type='text'
						placeholder='Username'
						id='username'
						name='username'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<label htmlFor='username'>Username</label>

					<input
						type='password'
						placeholder='Password'
						id='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<label htmlFor='password'>Password</label>

					<input
						type='password'
						placeholder='Confirm password'
						id='passwordConfirm'
						name='passwordConfirm'
						value={this.state.passwordConfirm}
						onChange={this.handleChange}
					/>
					<label htmlFor='passwordConfirm'>Confirm password</label>

					<button type='submit'>Sign Up</button>
					{this.state.submit && (
						<p className={this.state.value ? 'valid' : 'invalid'}>
							{this.state.valid ? 'password matched' : 'password do not match'}
						</p>
					)}
					{!this.state.submit}
				</form>
			</div>
		);
	}
}

export default SignUp;
