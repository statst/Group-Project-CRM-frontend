import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config.js';
import ClientForm from './ClientForm.js';

// Hou comment: I'm noticing that this file uses a different kind of indentation. Somebody from the team should take some time to indent/format the codebase consistently
const ClientCreate = (props) => {
  const initialClientState = {
      firstname :'',
      lastname:'',
      address:'',
      email:'',
      city:'',
      state:'',
      zip:''
  }
  const [client, setClient] = useState(initialClientState);
  const [createdId, setCreatedId] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = event => {
    event.persist(); // Hou comment: add a note here about why this is line necessary
    setClient({
      ...client,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const url = `${APIURL}/api/clients`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${props.userToken}`
      },
      body: JSON.stringify(client)
    })
    .then(response => response.json())
    .then(data => {
      setCreatedId(data._id);
    })
    .catch(() => {
      setError(true);
    });
  };

  if (createdId) {
    return <Redirect to={`/api/clients`} />;
  }
  return (
    <ClientForm
      client={client}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ClientCreate;