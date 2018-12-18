import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



class ProfilePage extends Component {

    state = {
        user: {},
        cart: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/api/user/${id}`).then((res) => {
            this.setState({user: res.data})
        })
    }

    onDelete() {
        let id = this.state.user._id;
        axios.delete(`/api/user/${id}`)
          .then(response => {
            this.props.history.push('/login')
          })
      }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.user.name}'s Profile</h1>
                    <button><Link to={`/user-profile/${this.props.match.params.id}/edit-profile`}>Edit Profile</Link></button>
                    <button onClick={this.onDelete.bind(this)}>Delete Account</button>
                </div>
                <h4>{this.state.user.email}</h4>
                <h4>{this.state.user.address}</h4>
                <h4>{this.state.user.city}</h4>
                <h4>{this.state.user.state}</h4>
                <h4>{this.state.user.zip_code}</h4>
                <h4>{this.state.user.phone_number}</h4>
            </div>
        );
    }
}

export default ProfilePage;