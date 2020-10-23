import React from "react";
import PropTypes from "prop-types";

import "./Digit.css";

export default class Digit extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    label: PropTypes.string,
  };

  visible = true;
  render() {
    return (
      <div className="digit">
        <div className="number">{this.format()}</div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }

  format() {
      if (this.props.value < 10 && this.props.value >= 0) {
          return "0" + this.props.value;
      };
      if (this.props.value < 0) {
          return "" + (-1 * this.props.value);
      };
      return this.props.value;
  }
}
