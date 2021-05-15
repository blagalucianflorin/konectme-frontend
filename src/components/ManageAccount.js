import React, {Component} from 'react';
import react from 'react';
import './ManageAccount.css';


class NameForm extends React.Component {
    
  
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
    return (
      <div class="y">
          <h2>Change your account details</h2>
        <form onSubmit={this.handleSubmit}>
            <label class="labels">
            First-Name:
            </label>
            <p>First-Name</p>
            <br></br>
            <label class="labels">
            Last-Name:
            </label>
            <p>First-Name</p>
            <br></br>
            <label class="labels">
            Username:
            </label>
            <p>First-Name</p>
            <br></br>
            <label class="labels">
            E-mail:
            </label>
            <input type="email" onChange={this.handleChange} />
            <br></br>
            <label class="labels">
            Password:
            </label>
            <input type="password" onChange={this.handleChange} />
            <br></br>
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
            
            
            <input type="submit" value="Submit" class="button"/>
        </form>


        
      </div>
      
  
    )
  }
}

export default NameForm;