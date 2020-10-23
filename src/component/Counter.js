import React from "react";
import Digit from "./Digit";
import PropTypes from "prop-types";

import "./Counter.css";

export default class Counter extends React.Component {
  static propTypes = {
    value: PropTypes.instanceOf(Date),
  };

  render() {
    const calculated = this.calculate();
    return (
      <div className="counter">
        {/* <Digit label="years" value={calculated.years} /> */}
        <Digit label="weeks" value={calculated.weeks} />
        <Digit label="days" value={calculated.days} />
        <Digit label="hours" value={calculated.hours} />
        <Digit label="minutes" value={calculated.minutes} />
        <Digit label="seconds" value={calculated.seconds} />
      </div>
    );
  }

  calculate() {
    const now = new Date();
    const duration = Math.floor((this.props.value.getTime() - now.getTime()) / 1000);

    const seconds = parseInt((duration) % 60),
      minutes = parseInt((duration / 60) % 60),
      hours = parseInt((duration / 3600) % 24),
      days = parseInt((duration / (3600 * 24)) % 7),
      weeks = parseInt((duration / (3600 * 24 * 7)) % 56);

    return {
      weeks,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
