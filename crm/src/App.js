import React, {useState} from 'react';

import './App.css';
import NavBar from './components/Navbar/Navbar';
import Clients from './components/Client/Client';

import Users from './components/User/User';

import UpdateUser from './components/User/UpdateUser';
import CreateUser from './components/User/CreateUser';
import SignUp from './components/Password/SignUp';
import SignIn from './components/Password/SignIn';
import Footer from './components/Footer/Footer';
import ClientDetails from './components/Client/ClientDetails';
import ClientEdit from './components/Client/ClientEdit';
import ClientCreate from './components/Client/ClientCreate';
import ContactForm from './components/Form/ContactForm';
import {Route} from 'react-router-dom';
import UserDetails from './components/User/UserDetails';
<<<<<<< HEAD
import Transactions from './components/Transactions/Transaction';

=======
import Transaction from './components/Transactions/Transactions';
import Dashboard from './components/Dashboard/Dashboard';
>>>>>>> created dashboard component, updated footer and contact form
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

<<<<<<< HEAD
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
                <Route
                    exact
                    path='/api/users/:emailId'
                    render={(routerProps) => {
                        return <UserDetails match={routerProps.match} userToken={token} />;
                    }}
                />
                <Route
                    exact
                    path='/api/users/:emailId/edit'
                    render={(routerProps) => {
                        return <UpdateUser match={routerProps.match} userToken={token} />;
                    }}
                />
=======
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
					<Route
						exact
						path='/api/users/:emailId'
						render={(routerProps) => {
							return (
								<UserDetails match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route
						exact
						path='/api/users/:emailId/edit'
						render={(routerProps) => {
							return <UpdateUser match={routerProps.match} userToken={token} />;
						}}
					/>
>>>>>>> created dashboard component, updated footer and contact form

					<Route
						exact
						path='/api/clients/:emailId'
						render={(routerProps) => {
							return (
								<ClientDetails match={routerProps.match} userToken={token} />
							);
						}}
					/>

					<Route
						exact
						path='/api/clients/:emailId/edit'
						render={(routerProps) => {
							return <ClientEdit match={routerProps.match} userToken={token} />;
						}}
					/>

					<Route
						exact
						path='/api/clients/create'
						render={(props) => {
							return <ClientCreate userToken={token} />;
						}}
					/>

<<<<<<< HEAD
                <Route
                    exact
                    path='/api/clients/:emailId/transactions'
                    render={(routerProps) => {
                        return <Transactions match={routerProps.match} userToken={token} />;
                    }}
                />

                {/* <Route exact path='/api/clients' component={Clients} />
=======
					{/* <Route exact path='/api/clients' component={Clients} />
>>>>>>> created dashboard component, updated footer and contact form
				<Route exact path='/api/clients/:emailId' component={ClientDetails} />

				<Route exact path='/api/clients/:emailId/edit' component={ClientEdit} />
				<Route exact path='/api/clients/create' component={ClientCreate} /> */}
					<Route exact path='/signup' component={SignUp} />
					<Route
						exact
						path='/signin'
						render={(props) => {
							return <SignIn setToken={setToken} userToken={token} />;
						}}
					/>
					{/* <Route
						exact
						path='/api/users/:emailId/transactions'
						render={(props) => {
							return <SignIn setToken={setToken} userToken={token} />;
						}}
					/> */}
					<Route exact path='/contact' component={ContactForm} />
					<Route exact path='/dashboard' component={Dashboard} />
				</main>
				<Footer />
			</div>
		);
};

export default App;
