import React, { Component } from 'react';
import SimpleSlider from './SimpleSlider'
import './HomePage.css'
import styled from 'styled-components'

const SplashImage = styled.div`
    background: url('https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;

    .wordsdiv {
        margin: auto;
        height: 40%;
        width: 60%;
        border: white solid;
        background-color: whitesmoke;
        position: relative;
        opacity: 0.8;
        font-size: 50px;
        color: black;
        display: flex;

    div {
        margin: auto;
        padding: 10px;
        text-align: center;
    }
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                {/* These are the images for the homepage. Some of them are hyperlinks */}
                {/* Dont need this image <img width="100%" src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80" alt="#"/>     */}
                <div className="splashdiv">
                    {/* <img id="splash" width="100%" src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/> */}
                    <SplashImage>
                        <div className="wordsdiv"><div>Home design that fits your style, not someone else's.</div></div>
                    </SplashImage>
                </div>

                <center><h1 id="how">How It Works</h1></center>


                <div className="bigdiv">
                    <div className="hiw">
                        <img id="firstpic"src="http://i64.tinypic.com/359d4qh.png" alt="" />
                        <center>
                            <p className="stepfont" id="steps1"> 1. Pick Your Design Package</p>
                        </center>
                    </div>
                    <div className="hiw">
                        <img id="middlepic" src="http://i67.tinypic.com/spf1ux.png" alt="" />
                        <center>
                            <p className="stepfont" id="steps2"> 2. Shop From Our Recommended Products</p>
                        </center>
                    </div>
                    <div className="hiw">
                        <img src="http://i68.tinypic.com/fw2lwz.png" alt="" />
                        <center>
                            <p className="stepfont" id="steps3"> 3. We Ship Your Selections Directly To You!</p>
                        </center>
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