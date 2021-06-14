import React, {Component} from 'react';
import react from 'react';
import axios from 'axios';
import './Message.css';
import { PropTypes } from 'react'

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                      message: '',
                    messages: []};
      }
    render(){
            if (this.props.message.sender_id == this.props.userid)
            {
                return (
                    <div>
                        <div>
                            <br></br>
                            <button className="message-orange">{this.props.message.content} </button>
                            <p><label className="labelmess">{this.props.message.sent_at}</label></p>
                            <br></br>
                            <br></br>
                            </div>
                    </div>
                ) 
                
            }
            else{
                return (
                    <div>
                        <div>
                            <br></br>
                            <button className="message-blue">{this.props.message.content}</button>
                            <label className="label">Sent at: {this.props.message.sent_at}</label>
                            <br></br>
                            <br></br>
                            </div>
                    </div>
                ) 
            }
    }   
}

export default Message;