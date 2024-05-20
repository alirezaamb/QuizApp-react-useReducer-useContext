import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';

const Question = () => {
  const [checked, setChecked] = useState(false);
  const ctx = useContext(QuizContext);
  const { questions, index } = ctx.state;
  console.log(questions);
  const { question, correct_answer, incorrect_answers } = questions[index];
  const options = [...incorrect_answers, correct_answer].sort();

  const checkAnswer = (option) => {
    if (questions.length === index + 1) {
      setTimeout(() => {
        ctx.dispatch({ type: 'finished', payload: option });
        setChecked(false);
      }, 500);
    } else {
      setTimeout(() => {
        ctx.dispatch({ type: 'selected_answer', payload: option });
        setChecked(false);
      }, 500);
    }
  };

  return (
    <div>
      <h4>{question}</h4>
      {options.map((option, index) => {
        return (
          <label
            key={index}
            className={
              checked
                ? option === correct_answer
                  ? 'text-green-600'
                  : 'text-red-700'
                : ''
            }
          >
            <span>{option}</span>
            <input
              type="radio"
              name={question}
              value={option}
              disabled={checked}
              onChange={() => {
                checkAnswer(option), setChecked(true);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Question;
