import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ConditionsContainer from '../ConditionsContainer/ConditionsContainer';
import EditContainer from '../EditContainer/EditContainer';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }
    handleEdit = async (formData) => {
        try{
            const result = await fetch(`http://localhost:9000/api/v1/users/me`, {
                method: "PUT",
                credentials: 'include',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const parsedResult = await result.json();
            console.log(parsedResult);
            console.log(formData)
            await this.setState({
                username: parsedResult.data.username,
                location: parsedResult.data.location
            })
        }catch(err){
            console.log(err);
        }
    }
    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render(){
        console.log(this);
        return <div className="userInfo">
            <small>Hello, {this.props.username}!</small><br/>
            <button onClick={this.showModal}>Edit</button>
            <button onClick={this.props.handleLogout}>Logout</button>
            {this.state.showModal ?
            <EditContainer username={this.props.username} location={this.props.location} handleEdit={this.handleEdit}/>
            :
            <ConditionsContainer lat={this.props.lat} lng={this.props.lng} location={this.props.location}/>
            }
        </div>
    }
}

export default UserContainer;