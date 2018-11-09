import React, { Component } from 'react';

import Profile from './Profile';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    showComponent: false
  }
}


state = {
  user: {}
  }

getUser = () => {
  const name = this.refs.name.value;
  fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
    	this.setState({
    		user:  {
    			name: data.name, 
    			location: data.location,
    			image: data.avatar_url,
    			link: data.html_url,
          followers: data.followers,
          repos: data.public_repos,
          since: data.created_at
    		},
         showComponent: true
    	})
    })
	}

  render() {

  	const { user } = this.state;

    return (
      <div className="App">
      <div className="station">
    		<h1>Github Search Station</h1>
    	</div>
      	<h4>Enter a username to get a profile info and repositories </h4>
    		<div className="search">
    			<input type="text"
    						 placeholder="Enter a GitHub Username" ref="name"/>
    			<button className="go" onClick={this.getUser}>Go</button>
          {this.state.showComponent ?
            <Profile user={user}/>:
            null
          }
    		</div>
      </div>
    );
  }
}



export default App;
