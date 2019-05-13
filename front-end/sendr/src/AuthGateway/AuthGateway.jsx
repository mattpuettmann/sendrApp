import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';


class AuthGateway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };
  }

  
  render() {
    return <div>
        <RegistrationForm></RegistrationForm>
    </div>     
  }
}





export default AuthGateway;