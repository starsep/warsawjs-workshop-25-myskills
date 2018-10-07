import React from 'react';
import PropTypes from 'prop-types';

const SelectQuestion = ({ question, options}) => (
  <li className="SelectQuestion-item">
    {question}
    <br />
    <select>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </li>
);


SelectQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectQuestion;
