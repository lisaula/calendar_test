import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Country:'',
      StartDate: '',
      Days: '',
      Calendars: ''
    };

    this.handleButton = this.handleButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleButton(){
    console.log("Button pressed");
  }
  handleInputChange(event){
    console.log("entro");
    switch (event.target.className){
      case 'Country':
        this.setState({Country: event.target.value});
      break;
      case 'StartDate':
        this.setState({StartDate: event.target.value});
      break;
      case 'Days':
        this.setState({Days: event.target.value});
      break;
    }
  }

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
