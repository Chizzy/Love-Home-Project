import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';
import AboutUsPage from './components/AboutUsPage'
import ContactUsPage from './components/ContactUsPage'
import DesignServicesPage from './components/DesignServicesPage'
import HomePage from './components/HomePage'
import OrderConfirmationPage from './components/OrderConfirmationPage'
import OrderReviewPage from './components/OrderReviewPage'
import ProfilePage from './components/ProfilePage'
import ShoppingCartPage from './components/ShoppingCartPage'
import StorePage from './components/StorePage'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)


class App extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <Router>
          <Switch>
            <p>
              <NavbarTop />
              THIS IS THE APP.JS PAGE
          {/* <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80" alt=""/>    
             */}

              <NavbarBottom />
            </p>


            {/* //these are the paths on the url in the addressbar and they dictate what the user will see */}

            
            <Route exact path='/AboutUsPage' component={AboutUsPage} />
            <Route exact path='/ContactUsPage' component={ContactUsPage} />
            <Route exact path='/DesignServicesPage' component={DesignServicesPage} />
            <Route exact path='/OrderConfirmationPage' component={OrderConfirmationPage} />
            <Route exact path='/OrderReviewPage' component={OrderReviewPage} />
            <Route exact path='/ProfilePage' component={ProfilePage} />
            <Route exact path='/ShoppingCartPage' component={ShoppingCartPage} />
            <Route exact path='/StorePage' component={StorePage} />
            <Route exact path='/' component={HomePage} />

          </Switch>
        </Router>

      </div>
    );
    }
}

export default App;