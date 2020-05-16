import React, {Component} from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Clients from './components/Client/Client';
import clientsSeed from './Data/clientsSeed.json';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: clientsSeed
        };
    }

    render() {
        console.log(this.state.clients);
        return (
            <div>
                <NavBar />
                <main>
                    {/* <Route exact path='/clients' render={() => <Clients clients={this.state.clientsSeed} />} /> */}
                    <Clients clients={this.state.clients} />
                </main>
            </div>
        );
    }
}

export default App;
