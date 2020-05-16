import React from 'react';
import clients from '../../Data/clientsSeed.json';

function Clients(props) {
    console.log(props.clients);
    return (
        <div>
            <h1>Clients</h1>
            {props.clients &&
                props.clients.map((client) => {
                    return (
                        <div key={client._id} className='container'>
                            <p>{client.firstname}</p>
                            <p>{client.lastname}</p>
                            <p>{client.email}</p>
                            <p>{client.address}</p>
                            <p>{client.city}</p>
                            <p>{client.zipcode}</p>
                        </div>
                    );
                })}
        </div>
    );
}

export default Clients;
