import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Prosoft Calendar</h2>
            <input className='input' type='text' className='Country' placeholder='US' onChange={this.handleInputChange}/>
            <input className='input' type='text' className='StartDate' placeholder='YYYY-MM-DD' onChange={this.handleInputChange}/>
            <input className='input' type='text' className='Days' placeholder='30' onChange={this.handleInputChange}/>
            <button onClick={this.handleButton}>Go</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
