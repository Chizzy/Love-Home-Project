import React, { Component } from 'react';
import './App.css';
import ContactUsPage from './components/ContactUsPage';
import AboutMePage from './components/AboutMePage'


class App extends Component {
  render() {
    return (
      <div>
        <ContactUsPage/>
        <AboutMePage/>
      </div>
    );
  }
}

export default App;
