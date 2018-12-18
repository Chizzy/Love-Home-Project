import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class EditProfilePage extends Component {
    state = {
        user: {
          username: "",
          password: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip_code: "",
          phone_number: ""
        }
      };

      handleChange = event => {
        const updatedUser = { ...this.state.user };
        // event target name wil be either 'username or password'
        updatedUser[event.target.name] = event.target.value;
        this.setState({ user: updatedUser });
      };
      handleSubmit = event => {
          event.preventDefault();
          const id = this.props.match.params.id
        // make post request to our api to create new user
        axios.put(`/api/user/${id}/`, this.state.user)
          .then(res => {
              console.log(res)
            this.props.history.push(`/user-profile/${res.data.pk}`)
          })
          .catch(err => {
            console.log(err);
          });
        // when we get that data back, we need to navigate to the new users page
      };
    
      
    render() {
        return (
           
            <div>
                <h1>Edit Your Profile</h1>
                <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">User Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.name}
              type="text"
              name="name"
            />
          </div>


          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.password}
              type="password"
              name="password"
            />
            </div>
            

            <div>
            <label htmlFor="email">Email: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.email}
              type="text"
              name="email"
            />
          </div>

            <div>
            <label htmlFor="address">Address: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.address}
              type="text"
              name="address"
            />
          </div>


            <div>
            <label htmlFor="city">City: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.city}
              type="text"
              name="city"
            />
          </div>


            <div>
            <label htmlFor="state">State: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.state}
              type="text"
              name="state"
            />
          </div>


            <div>
            <label htmlFor="zip_code">ZipCode: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.zip_code}
              type="text"
              name="zip_code"
            />
          </div>


          <div>
            <label htmlFor="phone_number">Phone Number: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.phone_number}
              type="text"
              name="phone_number"
            />
          </div>
          <button type="submit">Edit Profile</button>
        </form>
            </div>
            
           
        );
    }
}

export default EditProfilePage;