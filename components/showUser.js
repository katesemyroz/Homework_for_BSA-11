import React, { Component } from 'react';
import './css/showUser.css';

class ShowUser extends Component{
	constructor(props){
        super(props);
        this.handleRemoveUser = this.handleRemoveUser.bind(this);
    }

    handleRemoveUser(event){
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <div className="user">
                <p>{this.props.userName}</p>
                <button id={this.props.id} onClick={this.handleRemoveUser}>Remove User</button>
            </div>
        )
    }
}

export default ShowUser