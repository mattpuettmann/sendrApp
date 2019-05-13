import React, {Component} from 'react';
import './App.css';
import UserContainer from './UserContainer/UserContainer';
import AuthGateway from './AuthGateway/AuthGateway';

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
  }


  render(){
    return <div className="App">
      <h2>SENDR</h2>
      <AuthGateway />
      <UserContainer />
  </div>
  }
}





export default App;
