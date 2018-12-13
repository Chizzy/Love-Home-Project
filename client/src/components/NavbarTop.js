import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
    margin-right: 2vw;
    width: 45vw;
    display: flex;
    justify-content: space-around;
  }
`;

class NavbarTop extends Component {
    render() {
        return (
            <div>
            <NavBarStyles>
              <div className="right">
                <Link to="/aboutus">Design Services</Link>
                <Link to="/howitworks">Shop</Link>
                <Link to="/blog">My Profile</Link>
                
                <div>
                <i class="fas fa-shopping-cart"></i>
                </div>
                <Link to="/">
                
                <FontAwesomeIcon icon={faShoppingCart} />

                </Link>
              </div>
            </NavBarStyles>
          </div>
        );
    }
}

export default NavbarTop;