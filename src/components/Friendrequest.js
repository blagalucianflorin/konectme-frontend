import React, {Component} from 'react';
import react from 'react';
import './MyFriends.css';
import {Button} from "./Button";
import axios from 'axios';

class Friendrequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                      message: ''};
      }
    onAcceptUser = () =>{
        let info = {
            accepted: true
        }
        axios.patch('api/friendrequests/' + this.props.reqid, info)
        .then(res=>{
          if (res.data.success){
        this.setState({message:"Friend added"})
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
    onDeclineUser = () =>{
      let info = {
          accepted: false
      }
      axios.patch('api/friendrequests/' + this.props.reqid, info)
      .then(res=>{
        if (res.data.success){
      this.setState({message:"Friend added"})
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
        return (
            <div>
                    <label class="labels">{this.props.user.first_name + " " + this.props.user.last_name}</label>
                    <button class="smallbutton" onClick={this.onAcceptUser}>Accept</button>
                    <button class="smallbutton" onClick={this.onDeclineUser}>Decline</button>
                    {this.state.message}
                    <br></br>
                    <br></br>
            </div>
    )
        }
}

export default Friendrequest;