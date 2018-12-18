import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './LogInPage.css'

class LogInPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            const newState = {...prevState};
            newState[name] = value;
            return newState;
        })
    }

    render() {
        return (
            <div className="container">
                <div className="sign-up active" id="sign-up-button">
                    <p className="sign-up-header">Sign Up</p>
                </div>
                <div className="log-in" id="log-in-button">
                    <p className="log-in-header">Log In</p>
                </div>
                <form id="sign-up-form">
                    <div className="header">
                        <h1>Sign Up for Free</h1>
                    </div>
                    <input className="first-name" type="text" placeholder="First Name*" required/>
                    <input className="last-name" type="text" placeholder="Last Name*" required/>
                    <input type="email" placeholder="Email Address*" required/>
                    <input type="password" placeholder="Set a password*" required/>
                    <button id="sign-up-submit">Get Started</button>
                </form>
                <form id="log-in-form">
                    <div className="header">
                        <h1>Welcome back!</h1>
                    </div>
                    <input className="email" type="email" placeholder="Email Address*" required/>
                    <input type="password" placeholder="Your password*" required/>
                    <div className="password">
                        Forgot Password?
                    </div>
                    <button id="log-in-submit">Log in</button>
                </form>

            </div>
        );
    }
}

export default LogInPage;