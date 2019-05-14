import React, {Component} from 'react';
import './App.css';
import UserContainer from './UserContainer/UserContainer';
import AuthGateway from './AuthGateway/AuthGateway';
import {Switch, Route, Link } from 'react-router-dom';
import EditContainer from './EditContainer/EditContainer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleRegister = async (formData) => {
    console.log(formData);
    const response = await fetch("http://localhost:9000/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: 'include',
      headers: {
          "Content-Type": "application/json"
      }
    })
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    if(parsedResponse.status === 200){
      this.setState({
          loggedIn: true,
          username: parsedResponse.data.username,
          location: parsedResponse.data.location
      })
    }
  }
  handleLogin = async (formData) => {
    console.log('login route hit');
    console.log(formData);
    try{
      const loginResponse = await fetch("http://localhost:9000/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })     
      const parsedLoginResponse = await loginResponse.json();
      console.log(parsedLoginResponse, 'app js parsed login response');
      const temp = parsedLoginResponse.data.username
      if(parsedLoginResponse.status === 200){
        this.setState({
          loggedIn: true,
          username: parsedLoginResponse.data.username,
          location: parsedLoginResponse.data.location
        })
      }
    }catch(err){
      console.log(err);
    }
  }

  handleLogout = async () => {
    console.log('logout?')
    try{
        const logoutResponse = await fetch("http://localhost:9000/auth/logout", {
            method: "PUT",
          })
          console.log(logoutResponse);

          if(logoutResponse.status === 200){
            this.setState({
              loggedIn: false
            })
          }
    }catch(err){
      console.log(err);
    }
}
  render(){
    console.log(this.state, 'app js')
    return (
      <div className="App">
      <h2>SENDR!</h2>
        {this.state.loggedIn ? 
        <Switch>
          <Route exact path="/" render={(props) => 
            <UserContainer username={this.state.username} location={this.state.location} handleLogout={this.handleLogout}/>} />
          <Route exact path="/edit" component={EditContainer}></Route>
        </Switch>
        :
        <AuthGateway handleRegister={this.handleRegister}  handleLogin={this.handleLogin}/>}
    </div>
    )
  }
}





export default App;
