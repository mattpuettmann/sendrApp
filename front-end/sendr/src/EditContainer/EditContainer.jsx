import React, {Component} from 'react';

class EditContainer extends Component {
    constructor(){
        super();
        this.state ={
            username: "",
            location: ""
        }
    }
    componentDidMount(){
        this.setState({
            username: this.props.username,
            location: this.props.location
        })
    }
    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log('heya');
        e.preventDefault();
        this.props.handleEdit(this.state);
        console.log('handleEdit being hit!!')
        console.log(this.props)
    }
    handleDelete = async (e) => {
        e.preventDefault();
        console.log("Deleting!");
        try{
            const result = await fetch(`http://localhost:9000/api/v1/users/me`, {
                method: "DELETE",
                credentials: "include"
            })
            const parsedResult = await result.json();
            console.log(parsedResult)
        }catch(err){
            console.log(err);
        }
    }
    render(){
        console.log(this.props);
        return <div>
            <h4>Edit Your Profile</h4>
            <form>
                Username: <input onChange={this.handleFormChange} type="text" name="username" value={this.state.username} /><br/>
                Location: <input onChange={this.handleFormChange} type="text" name="location" value={this.state.location}/><br/>
                <button onClick={this.handleSubmit}>Submit Edits</button>
                <button onClick={this.handleDelete}>Delete User</button>
            </form>
        </div>
    }
}



export default EditContainer;