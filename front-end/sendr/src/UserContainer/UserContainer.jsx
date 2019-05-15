import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ConditionsContainer from '../ConditionsContainer/ConditionsContainer';

class UserContainer extends Component {
    constructor(){
        super(); 
    }

    componentDidMount() {
        const regex = /[^,\s][^\,]*[^,\s]*/;
        const thisShit = this.props.location.match(regex);
        console.log(thisShit);
    }

    handleEdit = async (e) => {
        try{
            console.log('editing time!');
            this.setState({
                [e.target.name]: e.target.value 
            })
        }catch(err){
            console.log(err);
        }
    }
    render(){
        console.log(this.props);
        return <div>
            <h3>SENDR User Container</h3>
            <h5>Hello, {this.props.username}!</h5>
            <Link to="/edit">Edit</Link><br/>
            <button onClick={this.props.handleLogout}>Logout</button>
            <h5>The current weather in {this.props.location}:</h5>
            <ConditionsContainer />
        </div>
    }
}

export default UserContainer;