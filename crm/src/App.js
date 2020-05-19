import React, { useState } from 'react';

import './App.css';
import NavBar from './components/Navbar/Navbar';
import Clients from './components/Client/Client';
import clientsSeed from './Data/clientsSeed.json';
import Users from './components/User/User';
import usersSeed from './Data/usersSeed.json';
import UpdateUser from './components/User/UpdateUser';
import CreateUser from './components/User/CreateUser';
import SignUp from './components/Password/SignUp';
import SignIn from './components/Password/SignIn';
import Footer from './components/Footer/Footer';
import ClientDetails from './components/Client/ClientDetails';
import ClientEdit from './components/Client/ClientEdit';
import ClientCreate from './components/Client/ClientCreate';
import ContactForm from './components/Form/ContactForm';
import { BrowserRouter, Route } from 'react-router-dom';
import UserDetails from './components/User/UserDetails';

const App = () => {
	const [token, setToken] = useState('');
	return (
		<div>
			<NavBar />
			<main>
				<Route
					exact
					path='/api/users'
					render={(props) => {
						return <Users userToken={token} />;
					}}
				/>

				<Route
					exact
					path='/api/clients'
					render={(props) => {
						return <Clients userToken={token} />;
					}}
				/>
				<Route
					exact
					path='/api/users/create'
					render={(props) => {
						return <CreateUser userToken={token} />;
					}}
				/>
				{/* <Route
					exact
					path='/api/users/:emailId'
					render={(props) => {
						return <UserDetails userToken={token} />;
					}}
				/> */}
				<Route
					exact
					path='/api/users/:emailId/edit'
					render={(props) => {
						return <UpdateUser userToken={token} />;
					}}
				/>
				<Route exact path='/api/clients' component={Clients} />
				<Route exact path='/api/clients/:emailId' component={ClientDetails} />

				<Route exact path='/api/clients/:emailId/edit' component={ClientEdit} />
				<Route exact path='/api/clients/create' component={ClientCreate} />
				<Route exact path='/signup' component={SignUp} />
				<Route
					exact
					path='/signin'
					render={(props) => {
						return <SignIn setToken={setToken} userToken={token} />;
					}}
				/>
				<Route exact path='/contact' component={ContactForm} />
			</main>
			<Footer />
		</div>
	);
};

export default App;
