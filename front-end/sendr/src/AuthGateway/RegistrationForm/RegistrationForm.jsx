import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            location: "",
            lat: "",
            lng: ""
        }
    }
    handleSubmit = async (e) => {
        console.log(this.state, "THIS IS THE STATE IN THE REGISTER");
        e.preventDefault();
        this.props.handleRegister(this.state);
        this.props.handleGeo(this.state.location);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    // handleGeo = async () => {
    //     const result = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg`)
    //     const parsedResult = await result.json();
    //     console.log(parsedResult.results[0].geometry.bounds.northeast.lat);
    //     console.log(parsedResult.results[0].geometry.bounds.northeast.lng);
    //     this.setState({
    //         lat: parsedResult.results[0].geometry.bounds.northeast.lat,
    //         lng: parsedResult.results[0].geometry.bounds.northeast.lng
    //     })

    // }
    render(){
        return <div className="homeForm">
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