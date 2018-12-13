import React, { Component } from 'react';
import './App.css';
import ContactUsPage from './components/ContactUsPage';
import AboutMePage from './components/AboutMePage';
import DesignServicesPage from './components/DesignServicesPage';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table'

class App extends Component {
  render() {
    return (
      <div>
        <ContactUsPage/>
        <AboutMePage/>
        <DesignServicesPage/>
      </div>
    );
  }
}

export default App;
