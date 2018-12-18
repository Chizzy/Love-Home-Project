import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const EditProfileButton = styled.button`
background-color: pink;
  color: white;
  font-size: 2.3rem;
  padding: 7.5px 5px;
`

class ProfilePage extends Component {
//set the state
    state = {
        users: {},
    }


    render() {
        return (
            <div>
                <h1>Profile</h1>
                <EditProfileButton>
                    <Link to={`/user/${this.props.match.params.id}/editprofile`}>Edit Profile
                    </Link>
                    </EditProfileButton>
  
            </div>
        );
    }
}

export default ProfilePage;