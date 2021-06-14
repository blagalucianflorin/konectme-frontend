import React, {Component} from 'react';
import react from 'react';
import axios from 'axios';
import './Chats.css';
import { PropTypes } from 'react'

class Chats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                      message: '',
                    messages: [],
                    chatid: ''};
      }

    startChat = () => {
        localStorage.setItem('chatid', this.props.chat.id);
        window.location.href="/api/chat";
    }
    render(){
        
            return (
                <div className = 'yyy'>
                    <div>
                                <br></br>
                                <button className="chatbutton" onClick={this.startChat}>{this.props.chat.id}</button>
                                <br></br>
                                <br></br>
                        </div>
                </div>
            ) 
    }   
}

export default Chats;