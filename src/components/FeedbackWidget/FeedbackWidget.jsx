import { Section } from './FeedbackWidget.styled';

export const FeedbackWidget = () => {
  return (
    <Section>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
      </ul>
      <h3>Statistics</h3>
      <ul>
        <li>
          <p>Good</p>
        </li>
        <li>
          <p>Neutral</p>
        </li>
        <li>
          <p>Bad</p>
        </li>
      </ul>
    </Section>
  );
};
