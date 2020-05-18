import React, {useState, useEffect} from 'react';
import {APIURL} from '../../config';
import {Link, Redirect} from 'react-router-dom';
import ClientForm from './ClientForm';

const ClientDetails = ({match}) => {
    const [client, setClient] = useState({});
    const [deleted, setDeleted] = useState(false);
    const [createdId, setCreatedId] = useState(null);
    const [error, setError] = useState(false);
    const emailId = match.params.emailId;
    // console.log(emailId);

    useEffect(() => {
        const url = `${APIURL}/api/clients/${emailId}`;
        fetch(url).then((response) => response.json()).then(setClient).catch(() => {
            // Update the state if there was an error
            // so we can give feedback to the user!
            setError(true);
        });
    }, []);

    const onDeleteClient = (event) => {
        const url = `${APIURL}/api/clients/${emailId}`;
        fetch(url, {method: 'DELETE'})
            .then((res) => {
                setDeleted(true);
            })
            .catch(console.error);
    };
    // If we deleted the client, redirect back to the movies list
    if (deleted) {
        return <Redirect to='/api/clients' />;
    }

    // Check if there was an error
    // If there is give the user feedback!
    if (error) {
        return <div>Sorry, there was a problem getting the movies</div>;
    }

    // Check if we have our clients
    // Display "Loading..." if not
    if (!client) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>First Name :{client.firstname} </p>
            <p>lastName : {client.lastname}</p>
            <p>Email:{client.email}</p>
            <p>Address:{client.address}</p>
            <p>City:{client.city}</p>
            <p>State:{client.state}</p>

            <div>
                <Link className='btn btn-info btn-sm margin-0' to={`/api/clients/${emailId}/edit`}>
                    Edit
                    {/* <ClientForm client={client} handleChange={handleChange} handleSubmit={handleSubmit} /> */}
                </Link>

                <button onClick={onDeleteClient}>Delete</button>
            </div>
        </div>
    );
};

export default ClientDetails;
