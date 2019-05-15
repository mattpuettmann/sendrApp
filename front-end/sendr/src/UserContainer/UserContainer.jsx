import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ConditionsContainer from '../ConditionsContainer/ConditionsContainer';

class UserContainer extends Component {
    
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
        return <div className="userInfo">
            <small>Hello, {this.props.username}!</small><br/>
            <Link to="/edit">Edit</Link><br/>
            <button onClick={this.props.handleLogout}>Logout</button>
            <h5>The current weather in {this.props.location}:</h5>
            <ConditionsContainer />
        </div>
    }
}

export default UserContainer;