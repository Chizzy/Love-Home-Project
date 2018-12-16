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
  background-color: grey;
  font-family: 'montserat';
  text-transform: uppercase;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: white;
    &:hover {
      color: red;
    }
  }
  .left {
    width: 55vw;
  }
  .right {
    margin-right: 2vw;
    width: 45vw;
    display: flex;
    justify-content: space-around;
  }
`;

class NewNavTop extends Component {
    render() {
        return (
            <div>
            <NavBarStyles>
              <div className="left">
                <a href="/">Jonny On It LOGO</a>
              </div>
              <div className="right">
                <Link to="/aboutus">About Us</Link>
                <Link to="/howitworks">How It Works</Link>
                <Link to="/blog">Blog</Link>
                <div className="booknow">
                    <Link to="/">Book Now</Link>
                </div>
                <Link to="/">Sign In</Link>
              </div>
            </NavBarStyles>
          </div>
        );
    }
}

export default NewNavTop;