import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  font-size: 1rem;
  background-color: #888c8f;
  // font-family: 'montserat';
  // text-transform: uppercase;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: whitesmoke;
    &:hover {
      color: red;
    }
  }
  .left {
    width: 55vw;
  }
  .right {
    display: flex;
    justify-content: space-between;
  }
`;

class NavbarTop extends Component {
    render() {
        return (
            <div>
            <NavBarStyles>
              <div className="right">
                <Link to="/AboutUs">About Us</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <div className="instagramlogo">
                <img height="20" src="https://tighestimepieces.com/wp-content/uploads/2016/11/Instagram-icon-WHITE-300x300.png"/>
                </div>
                <div className="facebooklogo">
                <img height="20" src="https://tighestimepieces.com/wp-content/uploads/2016/11/Facebook-icon-WHITE-300x300.png"/>
                </div>
                <div className="twitterlogo">
                <img height="20" src="https://tighestimepieces.com/wp-content/uploads/2016/11/Twitter-icon-circle-logo-WHITE-300x300.png"/>
                </div>
                <div className="pinterestlogo">
                <img height="20" src="https://www.freeiconspng.com/uploads/white-pinterest-logo-png--30.png"/>
                </div>
                
                </div>
            </NavBarStyles>
          </div>
        );
    }
}

export default NavbarTop;