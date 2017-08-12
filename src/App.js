import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar.js'
import moment from 'moment';
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
    if(this.state.Country !==''
    && this.state.Days !== ''
    && this.state.StartDate!==''
    && moment(this.state.StartDate).isValid()){
      moment.locale(this.state.Country);
      let date = moment(this.state.StartDate);
      let beginDay = date.format('DD');
      let endOfMonth = date.clone().endOf('month').format('DD')
      let spaningDays = 1 + (endOfMonth - beginDay);
      let remaingDays = this.state.Days;
      let Calendars = [];
      let i = 0;
      while(remaingDays >0){
        console.log('entro %d y remaingDays %d', i, remaingDays);
        Calendars.push(<Calendar key={`calendar${i++}`} month={date.clone().startOf('month')}/>);
        remaingDays -= spaningDays;
        date.add(spaningDays, 'day');
        console.log("date format "+date.format('L'));
        beginDay = date.format('DD');
        endOfMonth = date.clone().endOf('month').format('DD')
        spaningDays = 1 + (endOfMonth - beginDay);
        console.log('month %s begin %d end %d spanning %d remaining %d',date.format('MM'), beginDay, endOfMonth, spaningDays, remaingDays);
      }
      this.setState({Calendars})
    }else{
      alert("Invalid input");
    }
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
        { this.state.Calendars }
      </div>
    );
  }
}

export default App;
