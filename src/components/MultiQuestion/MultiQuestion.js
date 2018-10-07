import React from 'react';
import PropTypes from 'prop-types';

const MultiQuestion = ({ id, question, options }) => (
  <li className="MultiQuestion-item">
    {question}
    <br />
    {options.map((option) => {
      const checkboxId = `${id}-${option}`;
      return (
        <label key={option} htmlFor={checkboxId}>
          <input type="checkbox" value={option} id={checkboxId} />
          {option}
        </label>
      );
    })}
  </li>
);


MultiQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultiQuestion;
