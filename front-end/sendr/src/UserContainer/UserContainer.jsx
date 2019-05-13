import React, {Component} from 'react';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }       
    }
    render(){
        return <div>
            <h3>SENDR User Container</h3>
            <h5>Hello, user!</h5>
        </div>
    }
}

export default UserContainer;