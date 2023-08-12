import { RatingList } from './FeedbackWidget.styled';

export const Statistics = ({ rating, total }) => {
  return (
    <RatingList>
      <li>
        <p>Good: {rating.good}</p>
      </li>
      <li>
        <p>Neutral: {rating.neutral}</p>
      </li>
      <li>
        <p>Bad: {rating.bad}</p>
      </li>
      <li>
        <p>Total: {rating.total}</p>
      </li>
      <li>
        <p>Positive feedback: {rating.positive}%</p>
      </li>
    </RatingList>
  );
};
