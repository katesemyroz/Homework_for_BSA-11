import React, { Component } from 'react';
import AddUser from './addUser';
import UsersList from './usersList';
import './css/mainComponent.css';

let lastId = 0;

class MainComponent extends Component{
	constructor(){
        super();
        this.state = {
            newUserName: "defaultName",
            newId: lastId++,
            allUsers : [],
            newUser: ["defaultName", 0]
        }
        this.addUser = this.addUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
    }

	addUser(value) {
        const newUser = {value, lastId};
		this.setState({
            newUserName: value,
            newId: lastId++,
            newUser: newUser
        },  function () {
            if (this.state.newUserName != "")
                this.updateUsers();
            // console.log("this.state.newUserName = " + this.state.newUserName);
        });
    }

    updateUsers(){
        const { allUsers, newUser } = this.state;
        this.setState({
            allUsers: [...allUsers, newUser]
            }, function() {
                console.log(this.state.allUsers) 
            })
    }

    removeUser(value){
    	const {allUsers} = this.state;
    	allUsers.splice(value, 1);
		this.setState({
            allUsers: allUsers
        });	
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.newUserName !== "") {
            return true;
        } else {
            return false;
        }
    }

	render() {
		const {allUsers} = this.state;
        return (
            <div id="mainComponent">
                <AddUser onClick={this.addUser} />
                <hr></hr>
                <UsersList allUsers={this.state.allUsers} onClick={this.removeUser} />
            </div>
        )
    }
}

export default MainComponent