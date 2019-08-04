import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.username}</p>
            <p>User Output Component</p>
        </div>
    )
};

export default useroutput;