import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AboutItemStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ItemInfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class ItemPage extends Component {

    state = {
        item: {},
        cart:{
            total: 0,
            quantity: 0,
            items: []
        }
    }

    handleAddToCart = (event) => {
        event.preventDefault();
        const cart = this.state.cart.items;
        console.log(cart);
        cart.push(this.state.item);
        console.log(cart)
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/api/items/${id}`).then((res) => {
            this.setState({item: res.data})
            console.log(res.data)
        })
    }

    render() {
        return (
            <AboutItemStyle>
                 <div>
                    <img height="550" width="550" src={this.state.item.image_url} alt={this.state.item.name}/>
                </div>
                <ItemInfoStyle>
                    <h2>{this.state.item.name}</h2>
                    <h3>${this.state.item.price}</h3>
                    <p>{this.state.item.description}</p>
                    <button type="button" className="btn btn-secondary" id={this.state.item.pk}  onClick={this.handleAddToCart}>Add to Cart</button>
                </ItemInfoStyle>
            </AboutItemStyle>
        );
    }
}

export default ItemPage;