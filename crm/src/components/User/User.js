import React from 'react';
import users from '../../Data/usersSeed.json';
import Table from 'react-bootstrap/Table';

function Users(props) {
	console.log(props.users);
	return (
		<div>
			<h1>Users</h1>
			{props.users &&
				props.users.map((user) => {
					return (
						<div key={user._id} className='container'>
							<p>{user.firstname}</p>
							<p>{user.lastname}</p>
							<p>{user.email}</p>
							{/* <Table responsive ="sm">
								<thead>
									<tr>
										<th>#</th>
										<th>{user.firstname}</th>
										<th>{user.lastname}</th>
										<th>{user.email}</th>
									</tr>
								</thead>
							</Table> */}
						</div>
					);
				})}
		</div>
	);
}

export default Users;
