import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            Username: <input onChange={this.handleChange} type="text" name="username"/>                
            Password: <input onChange={this.handleChange} type="password" name="password"/>
            <input type="submit"/>
        </form>
    }
}


export default LoginForm;