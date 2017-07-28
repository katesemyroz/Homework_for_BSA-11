import React, { Component } from 'react';
import ShowUser from './showUser';
import './css/usersList.css';

class UsersList extends Component{

	constructor(props){
        super(props);
    }

    render() {
    	const allUsers = this.props.allUsers;
    	console.log(allUsers);
        return (
        	<div id="list">
                { allUsers.map( (elem, index, array) => {
                    return <ShowUser userName={elem.value} key={elem.lastId} id={index} onClick={this.props.onClick}/>
                })}
            </div>
        )

    }
}

export default UsersList