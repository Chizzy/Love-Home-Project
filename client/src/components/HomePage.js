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
            <img id="splash" src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
            
                <div className="wordsdiv">  Home design that fits your style, not someone else's.

            </div>
            </div>

            <center><h1 id="how">How It Works</h1></center>
            
            
            <div className="bigdiv">
                <div className="hiw">
                
                    <img src="http://i64.tinypic.com/359d4qh.png" alt=""/>
                   
                    
                        <p id="steps"> 1. Pick Your Design Package</p>
                       
                </div>
                <div className="hiw">
              
                    <img src="http://i67.tinypic.com/spf1ux.png" alt=""/>
                    
                    <p id="steps"> 2. Shop From Our Recomended Products</p>
                    
                </div>
                <div className="hiw">
                    
                        <img src="http://i68.tinypic.com/fw2lwz.png" alt=""/>
                        
                    <p id="steps"> 3. We Ship Your Selections Directly To You!</p> 
                    
                    
                </div>
            </div>

            <h1>Check out our Instagram inspiration feed!</h1>
            

{/* This is the code for the photocarousel for "instagram" */}


<SimpleSlider />

{/* <PureReactCarousel/> */}



            </div>
            
            );
    }
}

export default HomePage;