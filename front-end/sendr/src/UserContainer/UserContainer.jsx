import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ConditionsContainer from '../ConditionsContainer/ConditionsContainer';

class UserContainer extends Component {
    constructor(){
        super(); 
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
        return <div>
            <h3>SENDR User Container</h3>
            <h5>Hello, {this.props.username}!</h5>
            <Link to="/edit">Edit</Link><br/>
            <button onClick={this.props.handleLogout}>Logout</button>
            <h5>The local temperature in {this.props.location} is:</h5>
            <h3>TEMPERATURE DATA</h3>
            <ConditionsContainer />
        </div>
    }
}

export default UserContainer;