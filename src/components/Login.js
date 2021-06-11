import React from 'react';
import {Button} from "./Button";
import "./Login.css";
import axios from "axios";
import {Redirect} from "react-router-dom";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:'',
            redirect: "false"
        };
    }
    onLoginUser=()=>{
        let userInfo={
            username:this.refs.username.value,
            password:this.refs.password.value
        };
        axios.post('api/login', userInfo)
                .then(res=>{
                    if (res.data.success){
                localStorage.setItem('token', res.data.user.token);
                localStorage.setItem('userid', res.data.user.id);
                this.setState({message:"You are now logged in!"})
                window.location.href="/api/profile";
                    }
                    else {
                        this.setState({message:"Incorrect username or password"})
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.setState({message:"Incorrect username or password"})
                })
    }

    render(){
        return(
            <div className="y">
                <h2>Log into your KonectMe account</h2>
                <br></br>
                <p>
                    <label className="label">Username: <input type="text" ref="username"></input></label>
                </p>
                <br></br>
                <p>
                    <label className="label">Password: <input type="password" ref="password"></input></label>
                </p>
                <br></br>
                <Button onClick={this.onLoginUser}>Log in</Button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Login