import React, { Component } from "react";
import Statistic from "../statistic/Statistic";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className={styles.btn}>
          <button
            className={styles.button}
            name="good"
            type="button"
            onClick={this.good}
          >
            Good
          </button>
          <button
            className={styles.button}
            name="neutral"
            type="button"
            onClick={this.neutral}
          >
            Neutral
          </button>
          <button
            className={styles.button}
            name="bad"
            type="button"
            onClick={this.bad}
          >
            Bad
          </button>
        </div>
        <Statistic />
      </>
    );
  }
}

export default Feedback;
