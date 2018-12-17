import React, {Component} from 'react';
import axios from'axios';
import {Link} from "react-router-dom";
import styled from "styled-components"

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class LogInPage extends Component {

    state = {
        users: [],
        newUser: {}
    }

    handleChange = (event) => {
        const newUser = { ...this.state.newUser };
        newUser[event.target.name] = event.target.value;
        this.setState({newUser: newUser})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/user/', this.state.newUser).then((res) => {
            this.props.history.push(`/user/${res.data._id}`)
            console.log(res.data)
        })
    }

    componentDidMount() {
        axios.get('/api/user/').then((res) => {
            this.setState({users: res.data})
            console.log(res.data)
        })
    }

    render() {
        const allUsers = this.state.users.map(user => (
            <div key={user.pk}>
                <Link to={`/api/user/${user.pk}`}>{user.name}</Link>
            </div>
        ))
        return (
            <div>
                <h1>Log In To Shop</h1>
                <h3>All Users:</h3>
                {allUsers}

                <h3>Sign Up:</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange} type="text" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChange} type="text" name="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password"/>
                    </div>
                    <div>
                        <label htmlFor="address">Address: </label>
                        <input onChange={this.handleChange} type="text" name="address"/>
                    </div>
                    <div>
                        <label htmlFor="city">City: </label>
                        <input onChange={this.handleChange} type="text" name="city"/>
                    </div>
                    <div>
                        <label htmlFor="state">State: </label>
                        <input onChange={this.handleChange} type="text" name="state"/>
                    </div>
                    <div>
                        <label htmlFor="zip code">Zip Code: </label>
                        <input onChange={this.handleChange} type="text" name="zip_code"/>
                    </div>
                    <div>
                        <label htmlFor="phone number">Phone Number: </label>
                        <input onChange={this.handleChange} type="text" name="phone_number"/>
                    </div>
                    <button type="submit">Create User</button>
                </form>

            </div>
        );
    }
}

export default LogInPage;