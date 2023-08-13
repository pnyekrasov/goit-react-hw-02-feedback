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
  };

  handeleButtonClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handeleButtonClick} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              rating={this.state}
              positivePercentage={positivePercentage}
              total={total}
            />
          )}
        </Section>
      </>
    );
  }
}
