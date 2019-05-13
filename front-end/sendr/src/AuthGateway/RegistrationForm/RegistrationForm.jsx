import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                  Username: <input onChange={this.handleChange} type="text" name="username"/><br/>                 
                  Password: <input onChange={this.handleChange} type="password" name="password"/><br/>
                  <input type="submit"/>
            </form>
        )
    }
}



export default RegistrationForm;