import React, {Component} from 'react';
import react from 'react';
import './ManageAccount.css';
import {Button} from "./Button";
import axios from 'axios';

class NameForm extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {value: '',
                  message: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    axios.get('api/user/' + this.props.userid).then(res => {
      if (res.data.success){
        this.setState({
          first_name : res.data.user.first_name,
          last_name : res.data.user.last_name,
          username : res.data.user.username,
          email : res.data.user.email,
          created_at : res.data.user.created_at
        })
      }
    })
  }

  onUpdateUser=()=>{
    let userInfo={
        email:this.refs.email.value,
        password:this.refs.password.value
    };
    axios.patch('api/user/' + this.props.userid, userInfo)
            .then(res=>{
              if (res.data.success){
            this.setState({message:"Your information has been updated!"})
            window.location.href="/api/profile";
              }
              else {
                this.setState({message:"Sorry! Could not update information. Try again later!"})
              }
            })
            .catch(err => {
                console.log(err);
                this.setState({message:"Sorry! Could not update information. Try again later!"})
            })
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
  handleSubmit(event) {
    
    event.preventDefault();
    var value = document.getElementById("available").checked;
    if(value){
        localStorage.setItem('status','Available');
    }
    if(!value){
        localStorage.setItem('status','Busy');
    }
    window.location.reload();
    
  }

  render() {
        if (this.props.token){
            return(
              <div class="y">
              <h2>Change your account details</h2>
                <label class="labels">
                First-Name
                </label>
                <p>{this.state.first_name}</p>
                <br></br>
                <label class="labels">
                Last-Name:
                </label>
                <p>{this.state.last_name}</p>
                <br></br>
                <label class="labels">
                Username:
                </label>
                <p>{this.state.username}</p>
                <br></br>
                <label class="labels">
                <p>Current email: {this.state.email}</p>
                E-mail:
                </label>
                <input type="email" ref="email" />
                <br></br>
                <label class="labels">
                Password:
                </label>
                <input type="password" ref="password"/>
                <br></br>
                <button class="button" onClick={this.onUpdateUser}>Save changes</button>
                {this.state.message}
                <br></br>
                <br></br>
                <br></br>
                
            <form onSubmit={this.handleSubmit}>
                <p>Status: {localStorage.getItem("status")}</p>
                <br></br>
                <div className="checkers">
                    <input type="radio" id="available" name="status" value="available"  onChange={this.handleChange}/>
                    <label for="available">Available</label><br></br>
                    <input type="radio" id="busy" name="status" value="busy" onChange={this.handleChange}/>
                    <label for="busy">Busy</label>
                    <br></br>
                </div>
                <br></br>
                
                
                <input type="submit" value="Change status" class="button"/>
            </form>
            <p>Account created on: {this.state.created_at}</p>
            <br></br>
            <br></br>
                <button class="deletebtn" onClick={this.onDeleteUser}>Delete account</button>
    
    
            
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

export default NameForm;