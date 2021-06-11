import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NameForm from './components/ManageAccount';
import Profile from './components/Profile';
import { Component } from 'react';

export default class App extends Component {

  state = {};

  componentDidMount = () => {
    this.setState({
      token: localStorage.getItem('token'),
      userid: localStorage.getItem('userid')
    })
  }

  
  render () {
    return (
      <Router>
      <div className="App">
        <Navbar token={this.state.token} userid={this.state.userid}/>
        <Switch>
        <Route path="/api/account" exact component={() => <NameForm token={this.state.token} userid={this.state.userid}/>}/>
        <Route path="/api/profile" exact component={() => <Profile token={this.state.token} userid={this.state.userid}/>}/>
        <Route path="/api/register" exact component={Register}/>
        <Route path="/api/login" exact component={Login}/>
        </Switch>
      </div>
      </Router>
    );
  }
}
