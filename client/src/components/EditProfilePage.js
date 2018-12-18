import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditProfilePage extends Component {
    state = {
        users: [],
        newUser: {
          username: "",
          password: ""
        }
      };
      componentDidMount() {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
          console.log(res.data)
          this.setState({ user: res.data })
        })
      }
    handleChange = event => {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const updatedNewUser = { ...this.state.newUser };
        // event target name wil be either 'username or password'
        updatedNewUser[event.target.name] = event.target.value;
        this.setState({ newUser: updatedNewUser });
      };
      handleSubmit = event => {
          event.preventDefault();
          const userId = this.props.match.params.userId
        // make post request to our api to create new user
        axios.patch(`/api/users/${userId}`, this.state.newUser)
          .then(res => {
            this.props.history.push(`/LoginPage`)
          })
          .catch(err => {
            console.log(err);
          });
        // when we get that data back, we need to navigate to the new users page
      };
    render() {
        return (
            <div>
                <h1>HELLO FROM THE EDIT PROFILE PAGE</h1>
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
                        <input onChange={this.handleChange} type="text" name="zip code"/>
                    </div>
                    <div>
                        <label htmlFor="phone number">Phone Number: </label>
                        <input onChange={this.handleChange} type="text" name="phone number"/>
                    </div>
                    <button type="submit">Create User</button>
                </form>
            </div>
        );
    }
}

export default EditProfilePage;