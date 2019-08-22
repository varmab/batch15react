import React from 'react'

const User = (props) => {
    return (
        <div>
            <div>
                <h1>{props.user.name}</h1>
            </div>
            <div>
                <p>Email:{props.user.email}</p>
                <p>Phone:{props.user.phone}</p>
            </div>
        </div>
    )
}

export default User;