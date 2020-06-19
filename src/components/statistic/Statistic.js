import React, { Component } from "react";

class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h2>Statistic:</h2>
        <p>Good: <span>{this.state.good}</span></p>
        <p>Neutral: <span>{this.state.neutral}</span></p>
        <p>Bad: <span>{this.state.bad}</span></p>
      </>
    );
  }
}

export default Statistic;
