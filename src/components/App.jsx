import React, { Component } from 'react';
// import { SectionTitle } from './SectionTitle/SectionTitle';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <SectionTitle title="Please leave feedback">
          <FeedbackOptions />
        </SectionTitle>
        <Statistics />
        <Notification message="There is no feedback" /> */}
      </div>
    );
  }
}
