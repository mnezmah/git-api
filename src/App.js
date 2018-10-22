import React, { Component } from 'react';
import Profile from './Profile';
import './App.css';

class App extends Component {

state = {
  user: {}
  }

getUser = () => {
  const name = this.refs.name.value;
  fetch(`http://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
    	this.SetState({
    		user:  {
    			name: data.name, 
    			location: data.location
    		}
    	})
    })
	}

  render() {
  	const { user } = this.state;
    return (
      <div className="App">
      <div>
    		<p>Github Search station</p>
    	</div>
      	<p>Enter a username to get a profile info and repositories </p>
    		<div className="search">
    			<input type="text"
    						 placeholder="Enter a GitHub Username" ref="name"/>
    			<button onClick={this.getUser}>Go</button>
    		</div>
    		<div className="result">
    			<Profile user={user}/>
    		</div>
      </div>
    );
  }
}

export default App;
