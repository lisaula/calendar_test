import React, { Component } from 'react';
import DayNames from './DayNames.js'
import Week from './Week.js'
import moment from 'moment';
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {month: moment().startOf('month')};
  }

  renderWeeks() {
    var weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday"),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      weeks.push(<Week className="week" key={date.toString()} date={date.clone()} month={this.state.month} />);
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    return <span>{this.state.month.format("MMMM, YYYY")}</span>;
  }

  render() {
    return (
      <div className = "calendar">
        <div className="header">
          {this.renderMonthLabel()}
        </div>
        <DayNames />
        {this.renderWeeks()}
    </div>
    );
  }
}
