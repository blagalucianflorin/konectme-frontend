import React from 'react';
import {Button} from "./Button";
import "./Register.css";
import axios from "axios";

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            message:''
        };
    }

    onCreateUser=()=>{
        let userInfo={
            first_name:this.refs.first_name.value,
            last_name:this.refs.last_name.value,
            username:this.refs.username.value,
            email:this.refs.email.value,
            password:this.refs.password.value
        };
        axios.post('api/user',userInfo).then(res=>{
            if(res){
                this.setState({message:"Your account has been created. Welcome to KonnectMe!"})
            }
        })
    }

    render(){
        return(
            <div className="y">
                <h2>Join KonectMe and start chatting</h2>
                <br></br>
                <p>
                    <label className="label">First Name: <input type="text" ref="first_name"></input></label>
                </p>
                <br></br>
                <p>
                    <label className="label">Last Name: <input type="text" ref="last_name"></input></label>
                </p>
                <br></br>
                <p>
                    <label className="label">Username: <input type="text" ref="username"></input></label>
                </p>
                <br></br>
                <p>
                    <label className="label">Email: <input type="email" ref="email"></input></label>
                </p>
                <br></br>
                <p>
                    <label className="label">Password: <input type="password" ref="password"></input></label>
                </p>
                <br></br>
                <Button onClick={this.onCreateUser}>Sign Up</Button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Register