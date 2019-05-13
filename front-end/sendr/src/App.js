import React, {Component} from 'react';
import './App.css';
import UserContainer from './UserContainer/UserContainer';
import AuthGateway from './AuthGateway/AuthGateway';
import {Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      currentUser: null
    }
  }
  handleRegister = async (formData) => {
    console.log(formData);
    const response = await fetch("http://localhost:9000/api/v1/users", {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: 'include',
      headers: {
          "Content-Type": "application/json"
      }
    })
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  }


  render(){
    return (
      <div className="App">
      <h2>SENDR!</h2>
        {this.state.loggedIn ? 
        <Switch>
          <Route exact path="/" component={UserContainer} />
        </Switch>
        :
        <AuthGateway handleRegister={this.handleRegister}/>}
    </div>
    )
  }
}





export default App;
