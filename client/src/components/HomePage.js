import React, { Component } from 'react';
import styled from 'styled-components'
import SimpleSlider from './SimpleSlider'
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div>
                {/* These are the images for the homepage. Some of them are hyperlinks */}
            {/* Dont need this image <img width="100%" src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80" alt="#"/>     */}
            <div className="splashdiv">
            <img id="splash" width="1230" src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
            <div className="wordsdiv">  Home design that fits your style, not someone else's.

            </div>
            </div>


            <img width="100%" src="http://i65.tinypic.com/jue15u.png" alt=""/>
            <h1>Check out our Instagram inspiration feed!</h1>
            

{/* This is the code for the photocarousel for "instagram" */}


<SimpleSlider />

{/* <PureReactCarousel/> */}



            </div>
            
            );
    }
}

export default HomePage;