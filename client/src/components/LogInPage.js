import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './LogInPage.css'

class LogInPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        zip_code: '',
        phone_number: ''
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
                <form onSubmit={event => this.props.handleSignUp(event, this.state)} id="sign-up-form">
                    <div className="header">
                        <h1>Sign Up for Free</h1>
                    </div>
                    <input className="name" type="text" name="name" placeholder="Name*" value={this.state.name} onChange={this.handleChange} required/>
                    <input type="email" name="email" placeholder="Email Address*" value={this.state.email} onChange={this.handleChange} required/>
                    <input type="password" name="password" placeholder="Set a password*" value={this.state.password} onChange={this.handleChange} required/>
                     <input type="text" name="address" placeholder="Address*" value={this.state.address} onChange={this.handleChange} required/>
                     <input type="text" name="city" placeholder="City*" value={this.state.city} onChange={this.handleChange} required/>
                     <input type="text" name="zip_code" placeholder="Zip Code*" value={this.state.zip_code} onChange={this.handleChange} required/>
                     <input type="text" name="phone_number" placeholder="Phone Number*" value={this.state.phone_number} onChange={this.handleChange} required/>
                    <button type="submit" id="sign-up-submit">Get Started</button>
                </form>
                <form onSubmit={event => this.props.handleLogIn(event, this.state)} id="log-in-form">
                    <div className="header">
                        <h1>Welcome back!</h1>
                    </div>
                    <input className="email" name="email" type="email" placeholder="Email Address*" value={this.state.email} onChange={this.handleChange} required/>
                    <input type="password" name="password" placeholder="Your password*" value={this.state.password} onChange={this.handleChange} required/>
                    <button type="submit" id="log-in-submit">Log In</button>
                </form>

            </div>
        );
    }
}

export default LogInPage;

LogInPage.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
    handleLogIn: PropTypes.func.isRequired
};