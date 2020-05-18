import React, {useState, useEffect} from 'react';
import {APIURL} from '../../config';
import {Link, Redirect} from 'react-router-dom';

const ClientDetails = ({match}) => {
    const [client, setClient] = useState(null);
    const [deleted, setDeleted] = useState(false);

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
    // If we deleted the client, redirect back to the client list
    if (deleted) {
        return <Redirect to='/api/clients' />;
    }

    // Check if there was an error
    // If there is give the user feedback!
    if (error) {
        return <div>Sorry, there was a problem getting the clients</div>;
    }

    // Check if we have our clients
    // Display "Loading..." if not

    return (
        <>
        {!client ? '' : (<div>
            <p>First Name :{client.firstname} </p>
            <p>lastName : {client.lastname}</p>
            <p>Email:{client.email}</p>
            <p>Address:{client.address}</p>
            <p>City:{client.city}</p>
            <p>State:{client.state}</p>
            <p>transactions:{client.transactions}</p>

            <div>
                <Link className='btn btn-info btn-md' to={`/api/clients/${emailId}/edit`}>
                    Edit
                </Link>

                <button className='btn btn-danger mr-3 ml-3' onClick={onDeleteClient}>
                    Delete
                </button>
                <Link className='btn btn-info btn-md margin-0' to={`/api/clients`}>
                    Go Back
                </Link>
            </div>
        </div>)}
        </>
    );
};

export default ClientDetails;
