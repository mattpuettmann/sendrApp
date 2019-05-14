import React, {Component} from 'react';
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
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.props.handleLogout}>Logout</button>
            <ConditionsContainer />
        </div>
    }
}

export default UserContainer;