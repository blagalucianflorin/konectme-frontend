import React, {Component} from 'react';
import react from 'react';
import './MyFriends.css';
import {Button} from "./Button";
import axios from 'axios';
import './Friend.css';

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                      message: ''};
      }

    componentDidMount = () => {
        axios.get('api/friend',{
            params: {
              friend_one: this.props.userid,
              friend_two: this.props.user.id
            }
          }).then(res => {
            if (res.data.success){
                console.log(res.data.message)
              if (res.data.message == "Users are friends"){
                   this.setState({value:1})
              }
              else {
                this.setState({value:2})
              }
            }
          })
    }

    onSendRequest = () => {
        let params= {
            friend_one: this.props.userid,
            friend_two: this.props.user.id
          }
        axios.post('api/friendrequests', params).then(res => {
            if (res.data.success){
              this.setState({message: "Friend request sent!"})
            }
            else {
                this.setState({message: "Already sent a friend request!"})
            }
          })
    }

    render(){
        let display;
        let photo;
        if (this.props.user.photo_id)
        {
            photo = (<img class="photo" src={process.env.PUBLIC_URL + '/KonectmeLogo.jpg'} />)
        }
        else {
            photo = (<img class="photo" src={process.env.PUBLIC_URL + '/KonectmeLogo.jpg'} />)
        }

        if (this.state.value == 1)
        {
            return (
                <div className = 'y'>
                    <div>
                                <br></br>
                                {photo}
                                <br></br>
                                <label class="labels">{this.props.user.first_name + " " + this.props.user.last_name + " (" + this.props.user.username + ")"}</label>
                                <label className="greybutton">Already added</label>
                                <br></br>
                                {this.state.message}
                                <br></br>
                                <br></br>
                        </div>
                </div>
            )
        }
        else {
            return (
                <div className = 'y'>
                    <div>
                                <br></br>
                                {photo}
                                <br></br>
                                <label class="labels">{this.props.user.first_name + " " + this.props.user.last_name + " (" + this.props.user.username + ")"}</label>
                                <button className="smallbutton" onClick={this.onSendRequest}>Add Friend</button>
                                <br></br>
                                {this.state.message}
                                <br></br>
                                <br></br>
                        </div>
                </div>
            )
        }
        
    }   
}

export default Person;