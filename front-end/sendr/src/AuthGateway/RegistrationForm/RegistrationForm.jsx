import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    render(){
        return(
            <form>
                  Username: <input type="text" name="username"/><br/>                 
                  Password: <input type="password" name="password"/><br/>
                  <input type="submit"/>
            </form>
        )
    }
}



export default RegistrationForm;