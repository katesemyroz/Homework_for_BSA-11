import React, { Component } from 'react';
import MainComponent from './mainComponent'
import './css/addUser.css';

class AddUser extends Component{
    constructor(props){
        super(props);
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    handleAddUser(event){
        this.props.onClick((this.refs.theInput).value)
    }

    render() {
        return (
            <div id="addUser">
                <input placeholder="Enter the name" ref="theInput"></input>
                <button onClick={this.handleAddUser}>Add User</button>
            </div>
        )
    }
}

export default AddUser