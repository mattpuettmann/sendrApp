import React, {Component} from 'react';
import ConditionsContainer from '../ConditionsContainer/ConditionsContainer';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: true
        }       
    }
    handleLogout = async () => {
        try{
          console.log("Logout!");
          this.setState({
              loggedIn: false
          })
    
        }catch(err){
          console.log(err);
        }
      }
    render(){
        return <div>
            <h3>SENDR User Container</h3>
            <h5>Hello, {this.props.username}!</h5>
            <button onClick={this.handleLogout}>Logout</button>
            <ConditionsContainer />
        </div>
    }
}

export default UserContainer;