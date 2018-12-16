import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components"

const ItemListStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    justify-content space-around;
`

const SearchStyle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

class StorePage extends Component {

    state = {
        itemList: [],
        search: '',
        category: ''
    }

    componentDidMount() {
        axios.get('api/items').then((res) => {
            this.setState({itemList: res.data})
            console.log(res.data)
        })
    }

    searchFilter = (event) => {
        this.setState({search: event.target.value})
    }

    categoryFilter = () => {

    }

    render() {
        let filteredItems = this.state.itemList.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        );
        return (
            <div>
                <SearchStyle>
                    <div className="col-sm-2">
                        <input type="text" className="form-rounded form-control" placeholder="Search"/>
                    </div>
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter by Style
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Modern</a>
                            <a className="dropdown-item" href="#">Glam</a>
                            <a className="dropdown-item" href="#">Minimalist</a>
                        </div>
                    </div>
                </SearchStyle>
                <ItemListStyle>
                    {filteredItems.map(item => (
                        <div key={item.pk}>
                            <Link to={`/item/${item.pk}`}>
                                <img heigth="250" width="250" src={item.image_url} alt="item"/>
                                <h3>{item.name} ${item.price}</h3>
                            </Link>
                        </div>
                    ))}
                </ItemListStyle>
            </div>
        );
    }
}

export default StorePage;