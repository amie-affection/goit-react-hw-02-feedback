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
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
      </>
    );
  }
}

export default Statistic;
