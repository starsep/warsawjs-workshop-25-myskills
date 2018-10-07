import React from 'react';
import PropTypes from 'prop-types';

const TextQuestion = ({ id, question, onValueChange }) => (
  <li className="TextQuestion-item">
    {question}
    <br />
    <input type="text" onKeyPress={onValueChange(id)} />
  </li>
);


TextQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  validation: PropTypes.shape({
    type: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default TextQuestion;
