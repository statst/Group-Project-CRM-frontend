import React, {useState, useEffect} from 'react';
import {APIURL} from '../../config';
import users from '../../Data/usersSeed.json';
import Table from 'react-bootstrap/Table';

function Users(props) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchMyApi();
    }, []);

    async function fetchMyApi() {
        const url = `${APIURL}/api/users`;
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setUsers(data);
            })
            .catch(() => {
                setError(true);
            });
    }

    if (error) {
        return <div>Sorry, there was a problem getting the users</div>;
    }

    // Check if we have our movies
    // Display "Loading..." if not
    if (users.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {users.map((user) => (
                <div key={user._id}>
                    <p>{user.firstname}</p>
                    <p>{user.lastname}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;
