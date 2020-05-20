import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
			<>
				<Link to='/api/clients'>Clients</Link>
				<Link to='/api/users'>Users</Link>
				{/* <Link to='/api/users/:edit'>Users</Link> */}
				<Link to='/signin'>signIn</Link>
				<Link to='/signup'>signUp</Link>
				<Link to='/contact'>Contact Us</Link>
				<Link to='/dashboard'>Dashboard</Link>
				<Link to='/features'>Features</Link>
				<Link to='/'>Home</Link>
			</>
		);
}

export default NavBar;
