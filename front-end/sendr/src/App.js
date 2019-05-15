import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserContainer from './UserContainer/UserContainer';
import AuthGateway from './AuthGateway/AuthGateway';
import {Switch, Route, Link } from 'react-router-dom';
import EditContainer from './EditContainer/EditContainer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null,
      location: null,
      lat: null,
      lng: null
    }
  }
  handleGeo = async (location) => {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg`)
    const parsedResult = await result.json();
    console.log(parsedResult.results[0].geometry.bounds.northeast.lat);
    console.log(parsedResult.results[0].geometry.bounds.northeast.lng);
    await this.setState({
        lat: parsedResult.results[0].geometry.bounds.northeast.lat,
        lng: parsedResult.results[0].geometry.bounds.northeast.lng
    })
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
    if(parsedResponse.status === 200){
      this.setState({
          loggedIn: true,
          username: parsedResponse.data.username,
          location: parsedResponse.data.location

      })
    }
  }
  handleLogin = async (formData) => {
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
      await this.handleGeo(parsedLoginResponse.data.location);
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
    console.log(this.state)
    return (
      <div className="App" id="main">
      <h2>Sendr</h2>
        {this.state.loggedIn ? 
        <Switch>
          <Route exact path="/" render={(props) => 
            <UserContainer lat={this.state.lat} lng={this.state.lng} username={this.state.username} location={this.state.location} handleLogout={this.handleLogout}/>} />
          <Route exact path="/edit" component={EditContainer}></Route>
        </Switch>
        :
        <AuthGateway handleRegister={this.handleRegister}  handleLogin={this.handleLogin} handleGeo={this.handleGeo}/>}
    </div>
    )
  }
}





export default App;
