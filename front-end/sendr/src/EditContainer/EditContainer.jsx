import React, {Component} from 'react';

class EditContainer extends Component {
    constructor(){
        super();
    }
    render(){

        return <div>
            <h4>Edit Your Profile</h4>
            <form>
                Username: <input type="text" name="username" /><br/>
                New Password: <input type="text" name="password" /><br/>
                Location: <input type="text" name="location" /><br/>
                <input type="submit" />
            </form>
        </div>
    }
}



export default EditContainer;