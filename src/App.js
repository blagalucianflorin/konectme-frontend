import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NameForm from './components/ManageAccount';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/api/account" exact component={NameForm}></Route>
      <Route path="/api/register" exact component={Register}/>
      <Route path="/api/login" exact component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
