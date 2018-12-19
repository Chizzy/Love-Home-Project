import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './LogInPage.css'
import axios from 'axios'
import styled from 'styled-components'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const UsersStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class LogInPage extends Component {

    state = {
        users: [],
        newUser: {
            name: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            phone_number: ''
        }
    }

     handleChange = (event) => {
        const newUser = { ...this.state.newUser };
        newUser[event.target.name] = event.target.value;
        this.setState({newUser: newUser})
    }

     handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.newUser)
            axios.post('/api/user/', this.state.newUser).then((res) => {
            this.props.history.push(`/user-profile/${res.data.pk}`)
        }).catch((err) => {
            console.log(err)
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
                <Link to={`/user-profile/${user.pk}`}>{user.name}</Link>
            </div>
        ))
        return (
            <div className="container">
                <UsersStyle>
                     <h1>Select Your Name:</h1>
                     {allUsers}
                </div>
                </UsersStyle>
                <form onSubmit={this.handleSubmit} id="sign-up-form">
                    <div className="header">
                        <h1>Or Sign Up</h1>
                    </div>
                    <input className="name" type="text" name="name" placeholder="Name*" value={this.state.newUser.name} onChange={this.handleChange}  required/>
                    <input type="email" name="email" placeholder="Email Address*" value={this.state.newUser.email} onChange={this.handleChange}  required/>
                    <input type="password" name="password" placeholder="Set a password*" value={this.state.newUser.password} onChange={this.handleChange}  required/>
                     <input type="text" name="address" placeholder="Address*" value={this.state.newUser.address} onChange={this.handleChange}  required/>
                     <input type="text" name="city" placeholder="City*" value={this.state.newUser.city} onChange={this.handleChange}  required/>
                    <input type="text" name="state" placeholder="State*" value={this.state.newUser.state} onChange={this.handleChange}  required/>
                     <input type="text" name="zip_code" placeholder="Zip Code*" value={this.state.newUser.zip_code} onChange={this.handleChange}  required/>
                     <input type="text" name="phone_number" placeholder="Phone Number*" value={this.state.newUser.phone_number} onChange={this.handleChange}  required/>
                    <button type="submit" id="sign-up-submit">Create User</button>
                </form>
            </div>
        );
    }
}

export default LogInPage;

