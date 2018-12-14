import React, { Component } from 'react';
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
          <div>
            <p>
              <NavbarTop />
          {/* <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80" alt=""/>    
             */}

              <NavbarBottom />
            </p>
          

            {/* //these are the paths on the url in the addressbar and they dictate what the user will see */}

            <Switch>
            <Route path='/about-us' component={AboutUsPage} />
            <Route path='/contact-us' component={ContactUsPage} />
            <Route path='/design-services' component={DesignServicesPage} />
            <Route path='/order-confirmation' component={OrderConfirmationPage} />
            <Route path='/order-review' component={OrderReviewPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/shopping-cart' component={ShoppingCartPage} />
            <Route path='/store' component={StorePage} />
            <Route exact path='/' component={HomePage} />

          </Switch>
          </div>
        </Router>

      </div>
    );
    }
}

export default App;