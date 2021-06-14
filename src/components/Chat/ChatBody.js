import React, {Component} from 'react';
import react from 'react';
import {Button} from "../Button";
import "./ChatBody.css";
import Message from "./Message"; 
import axios from 'axios';
import { PropTypes } from 'react';

class ChatBody extends Component {

    constructor(props) {
        super(props);
        this.state = {chats: [], users:[], message:'', friends:[],messages:[], chatid: ''};
      }

    componentDidMount()
    {
        axios.get('api/chat/' + this.props.chatid).then(res => {
            if (res.data.messages){
                console.log(res.data)
                this.setState({messages: res.data.messages})
            }
            else{
                console.log(res.data)
            }
        })
    }

    AddMessage = () => {
        let info = {
            sender_id: this.props.userid,
            chat_id:  this.props.chatid,
            content: this.refs.messcontent.value,
            type : "text",
            expiry_time : "10"
        }
        console.log(info)
        axios.post('api/message', 
        {sender_id: this.props.userid,
            chat_id:  this.props.chatid,
            content: this.refs.messcontent.value,
            type : "text",
            expiry_time : "10"})
            .then(res=>{
              if (res.data.success){
            window.location.href="/api/chat";
              }
              else {
                this.setState({message:"Sorry! Could not update information. Try again later!"})
              }
            })
            .catch(err => {
                console.log(err);
                this.setState({message:"Sorry! Could not update information. Try again later!"})
            })
        window.location.href="/api/chat";
    }
    
    render () {
        if (this.props.token){
        const messagesmap = this.state.messages.map (function(message, index){
                return (
                    <Message message={message} userid={localStorage.getItem('userid')}/>
                )
        },this)
        
        return(
            <div>
          <div class="chatbody">
              <h2>Chat</h2>
              <br></br>
              <br></br>
            {messagesmap}
            <br></br>
            <div class="bottom">
            <input type="text" ref="messcontent"></input>
            <button class="button" onClick={this.AddMessage}>Submit</button>
            </div>
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
export default ChatBody;