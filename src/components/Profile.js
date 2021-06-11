import React, {Component} from 'react';
import react from 'react';
import './Profile.css';
import {Button} from "./Button";
import axios from 'axios';

class Profile extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount = () => {
    axios.get('api/user/' + this.props.userid).then(res => {
      if (res.data.success){
        this.setState({
          first_name : res.data.user.first_name,
          last_name : res.data.user.last_name,
          username : res.data.user.username,
          email : res.data.user.email,
          created_at : res.data.user.created_at,
          photo_id : res.data.user.photo_id
        })
      }
    })
  }
  render() {
        let photo;
        if (this.state.photo_id)
        {
            photo = (<img class="photo" src={process.env.PUBLIC_URL + '/KonectmeLogo.jpg'} />)
        }
        else {
            photo = (<img class="photo" src={process.env.PUBLIC_URL + '/KonectmeLogo.jpg'} />)
        }
        if (this.props.token){
            return(
              <div class="y">
                  {photo}
              <h2>{this.state.first_name} {this.state.last_name} ({this.state.username})</h2>
                <label class="labels">
                Status: {localStorage.getItem("status")}
                </label>
                <br></br>
                <br></br>
            <p>Account created on: {this.state.created_at}</p>
            <br></br>
            <br></br>
          </div>
            )
        }
        else {
            return (
              <div class="y">
                <br></br>
                <h2>Looks like you are not logged into your KonectMe account yet!</h2>
                <br></br>
                <Button><a href="/api/login" className="a">Login</a></Button>
                <Button><a href="/api/register" className="a">Sign Up</a></Button>
                <br></br>
                <br></br>
              </div>
            )
        }
  }
}

export default Profile;