import React, {Component} from 'react';
import react from 'react';
import './MyFriends.css';
import {Button} from "./Button";
import axios from 'axios';
import Friendrequest from './Friendrequest';
import Friend from './Friend';

class MyFriends extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {friend_requests: [], users:[], message:'', friends:[]};
  }

  componentDidMount = () => {
    axios.get('api/friendrequests/' + this.props.userid).then(res => {
      if (res.data.success){
        this.setState({friend_requests : res.data.friend_requests})
      }
    })
    axios.get('api/user').then(res => {
        if (res.data.success){
            this.setState({users : res.data.users})
        }
    })
    axios.get('api/friendslist/' + this.props.userid).then(res => {
      if (res.data.success){
        this.setState({friends : res.data.friends})
      }
    })
  }

  render() {
        if (this.props.token){
            const items = this.state.friend_requests.map(function(request, index){
                return request.friend_one_id
            });
            const requestsindex = this.state.friend_requests.map(function(request, index){
              return request.id
          }); 
            const usersmap = this.state.users.map (function(user, index){
                if (items.indexOf(user.id) > -1 )
                {
                    var i = items.indexOf(user.id)
                    return (
                        <Friendrequest user={user} reqid={requestsindex[i]}/>
                    )
                }
                else
                {
                    return null;
                }
            });
            const friendsmap = this.state.friends.map (function(user, index){
              return(
                <Friend user={user} userid={localStorage.getItem('userid')}/>
              )
            });
            return(
                <div>
              <div class="y">
                  <h2>Your friend requests</h2>
                  <br></br>
                  <br></br>
                        {usersmap}
                        <br></br>
                </div>
                <div class="y">
                <h2>Your friends</h2>
                <br></br>
                  <br></br>
                        {friendsmap}
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