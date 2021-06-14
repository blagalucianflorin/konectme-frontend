import React, {Component} from 'react';
import react from 'react';
import './ChatShell.css';
import axios from 'axios';
import ChatConversations from './ChatConversations';
import ChatBody from './ChatBody';
import { PropTypes } from 'react';

export default class ChatShell extends Component {

    constructor(props) {
        super(props);
        this.state = {chats: [], users:[], message:'', friends:[], messages: [], chatid: ''};
      }
    
    render () {
      return (
        <div className="rowc">
        <ChatConversations token={this.props.token} userid={this.props.userid}/>
        <div className="cbody">
        <ChatBody token={this.props.token} userid={this.props.userid} chatid={localStorage.getItem('chatid')}/>
        </div>
        </div>
      );
    }
}