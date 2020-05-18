import React from 'react';

const ClientDetails = ({match}) => {
    // const emailId = match.params.emailId;
    // console.log(emailId);
    return (
        <div>
            <h2>Client , {match.params.emailId}</h2>
            <p>Hi</p>
        </div>
    );
};

export default ClientDetails;
