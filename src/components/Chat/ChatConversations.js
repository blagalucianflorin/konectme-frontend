import React, {Component} from 'react';
import react from 'react';
import {Button} from "../Button";
import "./ChatConversations.css";
import Chats from "./Chats";
import axios from 'axios';
import { PropTypes } from 'react';

class ChatConversations extends Component {

    constructor(props) {
        super(props);
        this.state = {chats: [], users:[], message:'', friends:[], messages: [], chatid: ''};
      }
  

      
    componentDidMount = () => {
        axios.get('api/chatslist/' + this.props.userid).then(res => {
            if (res.data.success){
                this.setState({chats : res.data.chats})
            }
        })
        
    }
    OnHandleMessages2(msgs, id){
        this.setState({messages:msgs, chatid: id})
        console.log(this.state.messages, this.state.chatid)
    }

    render () {
        if (this.props.token){
        const chatsmap = this.state.chats.map (function(chat, index){
                return (
                    <Chats chat={chat} userid={localStorage.getItem('userid')} onHandleMessages={(msgs, id) => this.OnHandleMessages2(msgs, id)}/>
                )
        },this);
        return(
            <div className="sidenav">
          <div class="yy">
              <h2>Your Chats</h2>
              <br></br>
              <br></br>
            {chatsmap}
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
export default ChatConversations;