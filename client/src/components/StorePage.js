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
`;

const ItemStyle = styled.div`
    a {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-decoration: none;
        color: black;
    }
`;

const SearchStyle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

class StorePage extends Component {

    state = {
        itemList: [],
        search: '',
        category: '',
        selected: false
    }

    componentDidMount() {
        axios.get('api/items').then((res) => {
            this.setState({itemList: res.data})
        })
        // axios.get('api/categories').then((res) => {
        //     this.setState({category: res.data})
        //     console.log(res.data)
        // })
    }

    searchFilter = (event) => {
        this.setState({search: event.target.value})
    }

    toggleSelected = (event) => {
        const currentState = this.state.selected;
        this.setState({selected: !currentState})
    }

    categoryFilter = (event) => {
        const category = event.target.value;
        this.state.itemList.filter(item => item.category ===  this.setState({category: category}));
        console.log(category)
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
                        <input type="text" className="form-rounded form-control" placeholder="Search" value={this.state.search} onChange={this.searchFilter}/>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter by Style
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className={`${this.state.selected ? 'active': null} dropdown-item`} type="button" onClick={(event) => {this.toggleSelected(event); this.categoryFilter(event)}} value="all">All</button>
                            <button className={`${this.state.selected ? 'active': null} dropdown-item`} type="button" onClick={(event) => {this.toggleSelected(event); this.categoryFilter(event)}} value="modern">Modern</button>
                            <button className={`${this.state.selected ? 'active': null} dropdown-item`} type="button" onClick={(event) => {this.toggleSelected(event); this.categoryFilter(event)}} value="glam">Glam</button>
                            <button className={`${this.state.selected ? 'active': null} dropdown-item`} type="button" onClick={(event) => {this.toggleSelected(event); this.categoryFilter(event)}} value="minimalist">Minimalist</button>
                        </div>
                    </div>
                </SearchStyle>
                <ItemListStyle>
                    {filteredItems.map(item => (
                        <ItemStyle key={item.pk}>
                            <Link to={`/item/${item.pk}`}>
                                <img heigth="250" width="250" src={item.image_url} alt="item"/>
                                <h3>{item.name} ${item.price}</h3>
                            </Link>
                        </ItemStyle>
                    ))}
                </ItemListStyle>
            </div>
        );
    }
}

export default StorePage;