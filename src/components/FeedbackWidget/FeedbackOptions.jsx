import { Buttons } from './FeedbackWidget.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Buttons>
      <li>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </li>
    </Buttons>
  );
};
