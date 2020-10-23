import React from "react";
import Counter from "./Counter";
import "./App.css";

export default class App extends React.Component {

  date = new Date();

  render() {
    this.readData();
    return (
      <div className="container">
        <div className="content">
          <h1>{this.text}</h1>
          <img src={process.env.PUBLIC_URL + "/me.png"} alt="Flowkap" />
          <Counter value={this.date} />
        </div>
      </div>
    );
  }

  readData() {
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get('date');
    if (date) {
      this.date = new Date(date);
    }
  }
}
