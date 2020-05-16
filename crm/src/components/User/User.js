import React, {useState, useEffect} from 'react';
import {APIURL} from '../../config';
import users from '../../Data/usersSeed.json';
import Table from 'react-bootstrap/Table';

function Users(props) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        // load the movies when the component is mounted
        fetch(`${APIURL}/api/users`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Update state with successful movie data
                setUsers(data);
            })
            .catch(() => {
                // Update the state if there was an error
                // so we can give feedback to the user!
                setError(true);
            });
    }, []);
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

// function Users(props) {
//     console.log(props.users);
//     return (
//         <div>
//             <h1>Users</h1>
//             {props.users &&
//                 props.users.map((user) => {
//                     return (
//                         <div key={user._id} className='container'>
//                             <p>{user.firstname}</p>
//                             <p>{user.lastname}</p>
//                             <p>{user.email}</p>
//                             {/* <Table responsive ="sm">
// 								<thead>
// 									<tr>
// 										<th>#</th>
// 										<th>{user.firstname}</th>
// 										<th>{user.lastname}</th>
// 										<th>{user.email}</th>
// 									</tr>
// 								</thead>
// 							</Table> */}
//                         </div>
//                     );
//                 })}
//         </div>
//     );
// }

export default Users;
