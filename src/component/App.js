import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getNextDayOfWeek, WeekDays } from "../logic/dates.js"
import Counter from "./Counter";
import "./App.css";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      targetDate: new Date(),
    }
  }

  componentDidMount() {
    this.readData();
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <DatePicker
            showTimeSelect
            timeIntervals={1}
            timeFormat="HH:mm"
            dateFormat="PP - HH:mm"
            selected={this.state.targetDate}
            onChange={date => this.onChange(date)}
          />
        </div>
        <div className="center">
          <div className="content">
            <img src={process.env.PUBLIC_URL + "/me.png"} alt="Flowkap" /><br />
            {/* <div>{this.state.targetDate.toISOString()}</div> */}
            <Counter targetDate={this.state.targetDate} />
          </div>
        </div>
      </div>
    );
  }

  readData() {
    const urlParams = new URLSearchParams(window.location.search);
    let date = urlParams.get('date');
    if (!date) {
      date = getNextDayOfWeek(new Date(), WeekDays.FRI, 17);
    }
    this.setState({
      targetDate: new Date(date)
    });
  }

  onChange(date) {
    this.setState({
      targetDate: date
    });
    if (window.history.pushState) {
      const newURL = new URL(window.location.href);
      newURL.search = `date=${date.toISOString()}`;
      window.history.pushState({ path: newURL.href }, '', newURL.href);
    }
  }
}
