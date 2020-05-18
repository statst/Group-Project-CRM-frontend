import React, {useState, useEffect} from 'react';
import {APIURL} from '../../config';

const ClientDetails = ({match}) => {
    const [client, setClient] = useState({});
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

    return (
        <div>
            <p>First Name :{client.firstname} </p>
            <p>lastName : {client.lastname}</p>
            <p>Email:{client.email}</p>
            <p>Address:{client.address}</p>
            <p>City:{client.city}</p>
            <p>State:{client.state}</p>
        </div>
    );
};

export default ClientDetails;
