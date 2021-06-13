import React, {Component} from 'react';
import react from 'react';
import './DeleteAccount.css';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { Alert } from 'react';
import axios from 'axios';
import {Button} from "./Button";

class DeleteForm extends React.Component {
    
  
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  

    onDeleteUser=()=>{
      axios.delete('api/user/' + this.props.userid)
              .then(res=>{
              this.setState({message:"Account deleted"})
              window.location.href="/api/account";
              localStorage.clear();
              })
              .catch(err => {
                  console.log(err);
                  this.setState({message:"Sorry! Could not delete your account. Try again later!"})
              })
    }

  render() {

    if (this.props.token){
    return (
      
      <div id="feedback-main">
        <h1>Delete Account</h1>
        <div id="feedback-div">
          <h2><p>We're sorry to watch you leave us!</p></h2>
          <h3 className="redtext"> Keep in mind that once you delete your account your friends and conversations will be gone forever. </h3>
          <p>Also, we would love to hear your opinion about our app. Let us know in the feedback section below what you think we can change or implement, so the users would have the best experience.</p>
          <form  class="form" id="feedback-form1" name="form1" enctype="multipart/form-data">

            <p class="text">
              <textarea   id="feedback-comment" required placeholder="Give us a short feedback."></textarea>
            </p>

            <div class="feedback-submit">
              
            <button class="deletebtn" onClick={this.onDeleteUser}>Delete account</button>
              
             
              
            </div>
          </form>
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

export default DeleteForm;