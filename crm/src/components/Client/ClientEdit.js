import React, {useState, useEffect} from 'react';
import {APIURL} from '../../config';
import {Redirect} from 'react-router-dom';
import ClientForm from './ClientForm';
const ClientEdit = (props) => {
    const [client, setClient] = useState({});
    const [createdId, setCreatedId] = useState(null);
    const [error, setError] = useState(false);
    const emailId = props.match.params.emailId;

    useEffect(() => {
        const url = `${APIURL}/api/clients/${emailId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${props.userToken}`
            }
        })
            .then((response) => response.json())
            .then(setClient)
            .catch(() => {
                // Update the state if there was an error
                // so we can give feedback to the user!
                setError(true);
            });
    }, []);
    const handleChange = (event) => {
        event.persist();
        setClient({
            ...client,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        const url = `${APIURL}/api/clients/${emailId}`;
        console.log(url);

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Accept: 'application/json',
                Authorization: `Bearer ${props.userToken}`
            },
            body: JSON.stringify(client)
        })
            .then((response) => response.json())
            // We're going to update state so there's a re-render
            // By setting updated to true, we use this value to
            // render a Redirect component from react-router-dom
            // and take the user back to the "show" route which will
            // display the newly updated client.
            .then((data) => {
                setCreatedId(data._id);
            })
            .catch(() => {
                // Update the state if there was an error
                // so we can give feedback to the user!
                setError(true);
            });
    };
    if (createdId) {
        console.log(emailId);
        return <Redirect to={`/api/clients/${emailId}`} />;
    }

    return (
        <div>
            <ClientForm client={client} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};
export default ClientEdit;
