import { Component } from 'react';
import { FeedbackOptions } from './FeedbackWidget/FeedbackOptions';
import { Statistics } from './FeedbackWidget/Statistics';
import { Section } from './FeedbackWidget/Section';
import { Notification } from './FeedbackWidget/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handeleButtonClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
        total: prevState.total + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.state.total);
  };

  render() {
    const positivePercentage = this.countPositiveFeedbackPercentage();
    console.log(positivePercentage);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handeleButtonClick} />
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics rating={this.state} />
          )}
        </Section>
      </>
    );
  }
}
