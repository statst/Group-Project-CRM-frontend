import React, {Component} from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Clients from './components/Client/Client';
import clientsSeed from './Data/clientsSeed.json';
import Users from './components/User/User';
import usersSeed from './Data/usersSeed.json';


import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: clientsSeed,
            users: usersSeed
        };
    }

    render() {
        console.log(this.state.clients);
        console.log(this.state.users)
        return (
					<div>
						<NavBar />
						<main>
							<Route
								exact
								path='/clients'
								render={() => <Clients clients={this.state.clients} />}
							/>
							<Route
								exact
								path='/users'
								render={() => <Users users={this.state.users} />}
							/>
							{/* <Clients clients={this.state.clients} /> */}
							{/* <Users users={this.state.users} /> */}
						</main>
					</div>
				);
    }
}

export default App;
