import React from 'react';

import './App.css';
import NavBar from './components/Navbar/Navbar';
import Clients from './components/Client/Client';
import clientsSeed from './Data/clientsSeed.json';
import Users from './components/User/User';
import usersSeed from './Data/usersSeed.json';
import UserEdit from './components/User/UpdateUser';
import UserCreate from './components/User/CreateUser';
import SignUp from './components/Password/SignUp';
import SignIn from './components/Password/SignIn';
import Footer from './components/Footer/Footer';
import ClientDetails from './components/Client/ClientDetails';
import ClientEdit from './components/Client/ClientEdit';
import ClientCreate from './components/Client/ClientCreate';
import ContactForm from './components/Form/ContactForm';
import {BrowserRouter, Route} from 'react-router-dom';
import UserDetails from './components/User/UserDetails';

const App = () => (
	<div>
		<NavBar />
		<main>
			<Route exact path='/api/users' component={Users} />
			<Route exact path='/api/users/:emailId' component={UserDetails} />
			<Route exact path='/api/users/create' component={UserCreate} />

			<Route exact path='/api/users/:emailId/edit' component={UserEdit} />
			<Route exact path='/api/clients' component={Clients} />
			<Route exact path='/api/clients/:emailId' component={ClientDetails} />

			<Route exact path='/api/clients/:emailId/edit' component={ClientEdit} />
			<Route exact path='/api/clients/create' component={ClientCreate} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/signin' component={SignIn} />
			<Route exact path='/contact' component={ContactForm} />
		</main>
		<Footer />
	</div>
);

export default App;
