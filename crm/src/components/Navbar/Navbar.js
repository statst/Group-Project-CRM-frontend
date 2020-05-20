import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar({userToken, handleSignOut}) {
    return (
			<>
				<Link to='/api/clients'>Clients</Link>
				<Link to='/api/users'>Users</Link>
				{/* <Link to='/api/users/:edit'>Users</Link> */}
			{!userToken ?
				<Link to='/signin'>Sign In</Link> : ''
				}
				
				<Link to='/contact'>Contact Us</Link>
				<Link to='/dashboard'>Dashboard</Link>
				<Link to='/features'>Features</Link>
				<Link to='/'>Home</Link>
				{userToken ? <Link to='/' onClick={handleSignOut} className='btn btn-danger ml-0' >Sign Out</Link> : ''}
			</>
		);
}

export default NavBar;
