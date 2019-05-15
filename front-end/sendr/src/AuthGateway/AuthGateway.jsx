import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm';


class AuthGateway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };
  }

  
  render() {
    return <div>
        <RegistrationForm handleRegister={this.props.handleRegister} handleGeo={this.props.handleGeo}/>
        <LoginForm handleLogin={this.props.handleLogin} handleGeo={this.props.handleGeo}/>
    </div>     
  }
}





export default AuthGateway;