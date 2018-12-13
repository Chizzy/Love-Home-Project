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
  background-color: whitesmoke;
  font-family: 'montserat';
  text-transform: uppercase;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: grey;
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
                <Link to="/#">INSTAGRAMICON</Link>
                <div className="booknow">
                    <Link to="#">TWITTERICON</Link>
                </div>
                <Link to="#">FACEBOOKICON</Link>
              </div>
            </NavBarStyles>
          </div>
        );
    }
}

export default NavbarTop;