import React from 'react';
import PropTypes from 'prop-types';

const NumberQuestion = ({ id, question, max }) => (
  <li className="NumberQuestion-item">
    {question}
    <br />
    {[...Array(Number(max + 1)).keys()].map((number) => {
      const radioId = `${id}-${number}`;
      const labelKey = `label-${radioId}`;
      return (
        <label key={labelKey} htmlFor={radioId}>
          <input key={radioId} id={radioId} type="radio" value={number} name={id} />
          {number}
        </label>
      );
    })}
  </li>
);


NumberQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
};

export default NumberQuestion;
