import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'


const NavBarStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  font-size: 1rem;
  background-color: #398274;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: whitesmoke;
    &:hover {
      color: whitesmoke;
    }
  }
  .logo {
    background-color: red;
    width: 45vw;
    display: flex;
    align-items: center;
  }
`

class NavBarTop extends Component {

    render() {
        return (
            <div>
                <Link to='/'>
                    <div className="logo">
                        <center>
                            <img height="100" src="images/logo.png" alt="#"/>
                        </center>
                    </div>
                </Link>
                <NavBarStyles>
                    <Link to="/design-services">Design Services</Link>
                    <Link to="/store">Shop</Link>
                    {this.props.loggedIn ? (<h3 onClick={this.props.handleLogOut}>Log Out</h3>) : (
                        <Link to="/login">Log In/Sign Up</Link>)}
                    {this.props.loggedIn ? (<Link to={`/user-profile/${this.props.user.pk}`}>Profile</Link>) : null}
                    <Link to="/shopping-cart">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </Link>
                </NavBarStyles>
            </div>
        );
    }
}

export default NavBarTop;

NavBarTop.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    handleLogOut: PropTypes.func.isRequired
};