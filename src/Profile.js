import React, { Component } from 'react';

class Profile extends Component {


	render() {
		const { user } = this.props
		return (
			<div>
				<h3>User Details</h3>
				<h3>{user.name}</h3>
				<h3>{user.location}</h3>
			</div>
		)
	}
}

export default Profile;