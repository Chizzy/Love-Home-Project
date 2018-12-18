import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components'



class EditProfilePage extends Component {
    state = {
        users: [],
        newUser: {
          username: "",
          password: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip_code: "",
          phone_number: ""
        }
      };
    render() {
        return (
           
            <div>
                <h1>Edit Your Profile</h1>
            </div>
           
        );
    }
}

export default EditProfilePage;