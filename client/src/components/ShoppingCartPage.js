import React, {Component} from 'react';

class ShoppingCartPage extends Component {
    state = {
        cart: {}
    }

    componentDidMount() {
        this.updateStateWithLocalStorage();
    }

    updateStateWithLocalStorage = () => {
        for (let cart in this.state.cart) {
            if (localStorage.hasOwnProperty("cart")) {
                let cart = localStorage.getItem("cart");
                try {
                    cart = JSON.parse(cart);
                    this.setState({cart: cart})
                } catch (e) {
                    this.setState({cart: cart})
                }
            }
        }
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
            </div>
        );
    }
}

export default ShoppingCartPage;