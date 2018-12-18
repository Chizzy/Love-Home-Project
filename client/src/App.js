import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';
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
import EditProfilePage from './components/EditProfilePage'
import {createGlobalStyle} from "styled-components";

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
                    <NavbarTop/>

                    {/* //these are the paths on the url in the address bar and they dictate what the user will see */}

                    <Switch>
                        <Route path='/about-us' component={AboutUsPage}/>
                        <Route path='/contact-us' component={ContactUsPage}/>
                        <Route path='/design-services' component={DesignServicesPage}/>
                        <Route path="/users/:userId/edit-profile" component={EditProfilePage} />
                        <Route path='/items/:id' component={ItemPage} />
                        <Route path='/login' component={LogInPage} />
                        <Route path='/order-confirmation' component={OrderConfirmationPage}/>
                        <Route path='/order-review' component={OrderReviewPage}/>
                        <Route path='/profile' component={ProfilePage}/>
                        <Route path='/shopping-cart' component={ShoppingCartPage}/>
                        <Route path='/store' component={StorePage}/>
                        <Route exact path='/' component={HomePage}/>
                    </Switch>
                    <NavbarBottom/>
                </div>
            </Router>
        );
    }
}

export default App;