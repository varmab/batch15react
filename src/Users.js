import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState({
                    users: users,
                    loading: false
                })
            })
            .catch((err) => {
                this.setState({
                    error: true,
                    loading: false
                })
            })
    }

    render() {

        if (this.state.loading == true) {
            return (
                <div>
                    <h1>Users</h1>
                    <p>Loading.. Please wait</p>
                </div>
            )
        }

        if (this.state.error == true) {
            return (
                <div>
                    <h1>Users</h1>
                    <p>Sorry.. Failed to load users. Try later.</p>
                </div>
            )
        }
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {
                        this.state.users.map((user) => {
                            return <User key={user.id} user={user}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Users;