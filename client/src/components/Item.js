import React, {Component} from 'react';
import axios from 'axios'

class Item extends Component {

    state = {
        product: {
            type: '',
            name: '',
            price: '',
            description: '',
            image_url: '',
            category: ''
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Item;