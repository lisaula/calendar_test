import React, { Component } from 'react';

export default class DayNames extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="DayNames">
        <span className="dayN">Sun</span>
        <span className="dayN">Mon</span>
        <span className="dayN">Tue</span>
        <span className="dayN">Wed</span>
        <span className="dayN">Thu</span>
       	<span className="dayN">Fri</span>
       	<span className="dayN">Sat</span>
    </div>
    );
  }
}
