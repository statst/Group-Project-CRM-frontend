import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
	return (
		<Navbar expand='lg' bg='dark'>
			<Navbar.Brand href='/'>CRM</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link href='/clients'>Client</Nav.Link>
					<Nav.Link href='/users'>Users</Nav.Link>
					<Nav.Link href='/users/create'>Create Users</Nav.Link>
					<Nav.Link href='/users/:id/edit'>Edit User</Nav.Link>
					<Nav.Link href='/signup'>signUp</Nav.Link>
					<Nav.Link href='/signin'>signIn</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
