import React, {Component} from 'react';
import react from 'react';
import './AddFriends.css';
import {Button} from "./Button";
import axios from 'axios';
import Person from './Person.js';

class MyFriends extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {friend_requests: [], users:[], message:'', friends:[]};
  }

  componentDidMount = () => {
    axios.get('api/user').then(res => {
        if (res.data.success){
            this.setState({users : res.data.users})
        }
    })
  }

  render() {
        if (this.props.token){
            const usersmap = this.state.users.map (function(user, index){
                    return (
                        <Person user={user} userid={localStorage.getItem('userid')}/>
                    )
            });
            return(
                <div>
              <div class="y">
                  <h2>Add friends and start chatting!</h2>
                  <br></br>
                  <br></br>
                        {usersmap}
                        <br></br>
                </div>
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

export default MyFriends;