import React, { Component } from 'react';
import App from './App';
class Profile extends Component {

 
	render() {

		const { user } = this.props;
		return (
			
			<div className="profile">	
				<h3 className ="title">User Details</h3>
		    <div className="image">
		    	<img src={user.image}/>
		    	<br/>
		    	<a target="_blank" href={user.link}>go to profile</a>
		    </div>
				<div className="info">
					<p><strong>Name:</strong> {user.name}</p>
					<p><strong>Location:</strong> {user.location}</p>
					<p><strong>Public repos:</strong> {user.repos}</p>
					<p><strong>Followers:</strong> {user.followers}</p>
					<p><strong>Member since:</strong> {user.since}</p>
				</div>
			</div>
		)
	}
}

export default Profile;