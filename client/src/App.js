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
import ProfilePage from './components/ProfilePage'
import ShoppingCartPage from './components/ShoppingCartPage'
import StorePage from './components/StorePage'
import {createGlobalStyle} from "styled-components";
import ThankYouPage from "./components/ThankYouPage";

const Global = createGlobalStyle`
    body {
        font-family: Montserrat;
        font-weight: bold;
    }
`

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Global/>
                    <NavBarTop/>

                    {/* //these are the paths on the url in the address bar and they dictate what the user will see */}

                    <Switch>
                        <Route path='/about-us' component={AboutUsPage}/>
                        <Route path='/contact-us' component={ContactUsPage}/>
                        <Route path='/design-services' component={DesignServicesPage}/>
                        <Route path='/items/:id' component={ItemPage}/>
                        <Route path='/login' component={LogInPage}/>
                        <Route path='/user-profile/:id' component={ProfilePage}/>
                        <Route path='/shopping-cart' component={ShoppingCartPage}/>
                        <Route path='/store' component={StorePage}/>
                        <Route path='/thank-you' component={ThankYouPage}/>
                        <Route exact path='/' component={HomePage}/>
                    </Switch>
                    <NavBarBottom/>
                </div>
            </Router>
        );
    }
}

export default App;