import React, { useState, useEffect } from 'react';
import { APIURL } from '../../config';
import { Link, Redirect } from 'react-router-dom';
import UserForm from './UserForm';

const UserDetails = (props) => {
     const [user, setUser] = useState(null);
    const [deleted, setDeleted] = useState(false);
    // const [createdId, setCreatedId] = useState(null);
    const [error, setError] = useState(false);
    const emailId = props.match.params.emailId;
    // console.log(emailId);

    useEffect(() => {
        const url = `${APIURL}/api/users/${emailId}`;
       fetch(url, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${props.userToken}`,
					},
				})
					.then((response) => response.json())
					.then(setUser)
					.catch(() => {
						// Update the state if there was an error
						// so we can give feedback to the user!
						setError(true);
					});
    }, []);

    const onDeleteUser = (event) => {
        const url = `${APIURL}/api/users/${emailId}`;
        fetch(url, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Authorization': `Bearer ${props.userToken}`
					},
				})
					.then((res) => {
						setDeleted(true);
					})
					.catch(console.error);
    };
    // If we deleted the client, redirect back to the movies list
    if (deleted) {
        return <Redirect to='/api/users' />;
    }

    if (error) {
        return <div>Sorry, there was a problem getting the movies</div>;
    }
   

    return (
        <>
			  {!user ? '' :( <div>
            <p>First Name :{user.firstname} </p>
            <p>lastName : {user.lastname}</p>
            <p>Email:{user.email}</p>
            <div>
                <Link className='btn btn-info btn-sm margin-0' to={`/api/users/${emailId}/edit`}>
                    Edit
                </Link>

                <button onClick={onDeleteUser} className='btn btn-danger mr-3 ml-3'>
                    Delete
                </button>
                <Link className='btn btn-info btn-md margin-0' to={`/api/users`}>
                    Go Back
                </Link>
            </div>
        </div>)}
		</>
    );
};

export default UserDetails;
