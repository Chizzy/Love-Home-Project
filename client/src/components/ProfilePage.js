import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EditUserButton = styled.button`
background-color: #888c8f;
  color: white;
  font-size: 2.3rem;
  padding: 7.5px 5px;
`

const SplashImage = styled.div`
    background: url('https://goop.com/wp-content/uploads/2017/11/The_Cozy-Indoors_Starter_Kit_supports_home_shop-TRU456511-1-1.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;

    .wordsdiv {
        margin: auto;
        height: 40%;
        width: 60%;
        border: white solid;
        background-color: whitesmoke;
        position: relative;
        opacity: 0.8;
        font-size: 50px;
        color: black;
        display: flex;

    div {
        margin: auto;
        padding: 10px;
        text-align: center;

    .somebutton {
        width: 10px;

    }   
     
    }
    }`

class ProfilePage extends Component {

    state = {
        user: {},
        cart: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/api/user/${id}`).then((res) => {
            this.setState({ user: res.data })
        })
    }

    onDelete() {
        console.log(this.state.user)
        axios.delete(`/api/user/${this.state.user.pk}`)
        .then(response => {
            console.log(response.data)
                this.setState({ user: response.data })
                this.props.history.push(`/login`)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.user.name}'s Profile</h1>
                    <button className="somebutton"><Link to={`/user-profile/${this.props.match.params.id}/edit-profile`}>Edit Profile</Link></button>
                    <button className="somebutton" onClick={() => this.onDelete(this.state.user.id)}>Delete Profile</button>
                </div>
                
                <div className="splashdiv">
                    {/* <img id="splash" width="100%" src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/> */}
                    <SplashImage>
                        <div className="wordsdiv"><div>
                        <h4>{this.state.user.email}</h4>
                        <h4>{this.state.user.address}</h4>
                        <h4>{this.state.user.city}</h4>
                        <h4>{this.state.user.state}</h4>
                        <h4>{this.state.user.zip_code}</h4>
                        <h4>{this.state.user.phone_number}</h4>
                        <EditUserButton><Link to={`/user-profile/${this.props.match.params.id}/edit-profile`}>Edit Profile</Link></EditUserButton>
                        <EditUserButton onClick={() => this.onDelete(this.state.user.id)}>Delete Profile</EditUserButton>
        
                            </div></div>
                    </SplashImage>
                </div>

            
            
            
            </div>
        );
    }
}

export default ProfilePage;