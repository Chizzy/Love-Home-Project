import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './LogInPage.css'
import axios from 'axios'

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
            <div className="container">
                <div>
                     <h1>Select Your Name:</h1>
                     {allUsers}
                </div>
                <form id="sign-up-form">
                    <div className="header">
                        <h1>Or Sign Up for Free</h1>
                    </div>
                    <input className="name" type="text" name="name" placeholder="Name*"  required/>
                    <input type="email" name="email" placeholder="Email Address*"  required/>
                    <input type="password" name="password" placeholder="Set a password*"  required/>
                     <input type="text" name="address" placeholder="Address*"  required/>
                     <input type="text" name="city" placeholder="City*"  required/>
                     <input type="text" name="zip_code" placeholder="Zip Code*"  required/>
                     <input type="text" name="phone_number" placeholder="Phone Number*"  required/>
                    <button type="submit" id="sign-up-submit">Get Started</button>
                </form>
            </div>
        );
    }
}

export default LogInPage;

