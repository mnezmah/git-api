import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      // inputValue: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue:console.log(evt.target.value)
      
    });

    
  }

  render() {
    return (
    	
      <div className="App">
      <div>
    		<p>Github Search station</p>
    	</div>
      	<p>Enter a username to get a progfile infor and repositories </p>
    		<div className="search">
    			<input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
    		</div>
    		<div className="result">Results heere</div>
      </div>
    );
  }
}



export default App;
