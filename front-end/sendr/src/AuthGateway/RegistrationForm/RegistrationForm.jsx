import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            location: ""
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
    handleGeo = async () => {
        const result = await fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=Denver,+CO&key=AIzaSyDrIbIKBD3WPDwHWhiq7i9yaOEJp-C8xi4')
        const parsedResult = await result.json();
        console.log(parsedResult);
        this.setState({
            lat: "",
            long: ""
        })

    }
    render(){
        return <div>
            <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    Username: <input onChange={this.handleChange} type="text" name="username"/><br/>              
                    Password: <input onChange={this.handleChange} type="password" name="password"/><br/>
                    Location: <input onChange={this.handleChange} type="text" name="location"/><br/>
                    <input type="submit"/>
                </form>
            </div>
        
    }
}



export default RegistrationForm;