import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import NavBarTop from './components/NavBarTop';
import NavBarBottom from './components/NavBarBottom';
import ContactUsPage from './components/ContactUsPage'
import AboutUsPage from './components/AboutUsPage';
import DesignServicesPage from './components/DesignServicesPage'
import ItemPage from './components/ItemPage';
import LogInPage from './components/LogInPage';
import HomePage from './components/HomePage'
import OrderConfirmationPage from './components/OrderConfirmationPage'
import OrderReviewPage from './components/OrderReviewPage'
import ProfilePage from './components/ProfilePage'
import ShoppingCartPage from './components/ShoppingCartPage'
import StorePage from './components/StorePage'
import {createGlobalStyle} from "styled-components";
import axios from "axios";

const Global = createGlobalStyle`
    body {
        font-family: Montserrat;
        font-weight: bold;
    }
`

class App extends Component {
    constructor() {
        super();
        const params = localStorage.getItem('token')
        this.state = {
            displayed_form: '',
            loggedIn: params ? true : false,
            name: ''
        };
    }

    componentDidMount() {
        if (this.state.loggedIn) {
            axios.get('/api/current_user', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    this.setState({name: json.name})
                })
        }
    }

    handleLogIn = (event, data) => {
        event.preventDefault();
        axios.post('/token-auth', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    loggedIn: true,
                    name: json.user.name
                })
            })
    }

    handleSignUp = (event, data) => {
        event.preventDefault();
        axios.post('/api/user', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    loggedIn: true,
                    name: json.name
                })
            })
    }

    handleLogOut = () => {
        localStorage.removeItem('token');
        this.setState({loggedIn: false, name: ''})
    }


    render() {
        return (
            <Router>
                <div>
                    <Global/>
                    <NavBarTop loggedIn={this.state.loggedIn} handleLogOut={this.handleLogOut}/>

                    {/* //these are the paths on the url in the address bar and they dictate what the user will see */}

                    <Switch>
                        <Route path='/about-us' component={AboutUsPage}/>
                        <Route path='/contact-us' component={ContactUsPage}/>
                        <Route path='/design-services' component={DesignServicesPage}/>
                        <Route path='/items/:id' component={ItemPage}/>
                        <Route path='/login' render={(props) => <LogInPage {...props} handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp} />}/>
                        <Route path='/order-confirmation' component={OrderConfirmationPage}/>
                        <Route path='/order-review' component={OrderReviewPage}/>
                        <Route path='/user-profile/:id' component={ProfilePage}/>
                        <Route path='/shopping-cart' component={ShoppingCartPage}/>
                        <Route path='/store' component={StorePage}/>
                        <Route exact path='/' component={HomePage}/>
                    </Switch>
                    <NavBarBottom/>
                </div>
            </Router>
        );
    }
}

export default App;