import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components'

const TotalStyle = styled.div`
    background-color: #888c8f;
    width: 90%;
    color: black;
    margin: 0 auto;
    padding: 1rem;
   display: flex;
   justify-content: space-between;
`;

const CheckoutButtonStyle = styled.button`
    width: 20%;
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 2rem; 
    margin-right: 2rem;
`;

const CartItemsStyle = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        color: black;
        margin-left: 2rem;
    };
    a {
        margin-left: 2rem;
     };
    align-items: flex-start;
    justify-content: space-around;
`;

const IndividualItemStyle = styled.div`
    display: flex;
`;

const ShoppingCartStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class ShoppingCartPage extends Component {
    state = {
            cart:{
            total: 0,
            quantity: 0,
            items: []
        }
    }

    componentDidMount() {
        this.updateStateWithLocalStorage();
    }

    updateStateWithLocalStorage = () => {
        if (localStorage.hasOwnProperty("cart")) {
            let cart = localStorage.getItem("cart");
            try {
                cart = JSON.parse(cart);
                console.log(cart);
                this.setState({cart: cart});
            } catch (e) {
                this.setState({cart: cart})
            }
        }
    }


    render() {
        return (
            <ShoppingCartStyle>
                <h1>Shopping Cart</h1>
                <CartItemsStyle>
                    {this.state.cart.items.map(item => (
                        <IndividualItemStyle key={item.pk}>
                            <Link to={`/items/${item.pk}`}>
                                <img height="375" width="375" src={item.image_url}/>
                            </Link>
                            <div>
                                <h3>{item.name}</h3>
                                <h3>${item.price}</h3>
                                <a>Remove</a>
                            </div>
                        </IndividualItemStyle>
                    ))}
                </CartItemsStyle>
                <TotalStyle>
                    <div><h2 className="quantity">Quantity: {this.state.cart.quantity}</h2></div>
                    <div><h2 className="total">Total: ${this.state.cart.total}</h2></div>
                </TotalStyle>
                <CheckoutButtonStyle>Checkout</CheckoutButtonStyle>
            </ShoppingCartStyle>
        );
    }
}

export default ShoppingCartPage;