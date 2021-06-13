import React, {Component} from 'react';
import react from 'react';
import './MyFriends.css';
import {Button} from "./Button";
import axios from 'axios';
import './Friend.css';

class Friend extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                      message: ''};
      }

    onDeleteFriend = () => {
        axios.delete('api/friend/' + localStorage.getItem('userid'),  {
            data: { friend_two:this.props.user.id },
          })
        .then(res=>{
          if (res.data.success){
        this.setState({message:"Friend deleted"})
        window.location.href="/api/friends";
          }
          else {
            this.setState({message:"Sorry! Could not accept request. Try again later!"})
          }
        })
        .catch(err => {
            console.log(err);
            this.setState({message:"Sorry! Could not accept request. Try again later!"})
        })
    }
    render(){
        let photo;
        if (this.props.user.photo_id)
        {
            photo = (<img class="photo" src={process.env.PUBLIC_URL + '/KonectmeLogo.jpg'} />)
        }
        else {
            photo = (<img class="photo" src={process.env.PUBLIC_URL + '/KonectmeLogo.jpg'} />)
        }
        return (
            <div>
                    <br></br>
                    {photo}
                    <br></br>
                    <label class="labels">{this.props.user.first_name + " " + this.props.user.last_name + " (" + this.props.user.username + ")"}</label>
                    <button class="smallbutton">Chat</button>
                    <button class="smallbutton" onClick={this.onDeleteFriend}>Unfriend</button>
                    <br></br>
                    {this.state.message}
                    <br></br>
                    <br></br>
            </div>
    )
        }
}

export default Friend;