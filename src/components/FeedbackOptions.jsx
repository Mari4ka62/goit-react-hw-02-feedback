import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(btn => (
        <li key={btn}>
          <button type="button" onClick={onLeaveFeedback} name={btn}>
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.elementType,
};
