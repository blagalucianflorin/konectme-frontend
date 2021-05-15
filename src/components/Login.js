import React from 'react';
import {Button} from "./Button";
import "./Login.css";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:''
        };
    }

    onLoginUser=()=>{
        let userInfo={
            username:this.refs.username.value,
            password:this.refs.password.value
        };

        fetch('http://127.0.0.1:8000/api/login',{
            method:'Post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(userInfo)
        }).then(r=>r.json()).then(res=>{
            if(res.token){
                localStorage.setItem('token', res.token);
                this.setState({message:"You are now logged in!"})
            }
            else {
                this.setState({message:"Incorrect username or password"})
            }
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