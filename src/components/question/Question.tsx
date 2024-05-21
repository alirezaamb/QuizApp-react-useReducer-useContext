import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';

const Question = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState(null);
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
      }, 2000);
    } else {
      setTimeout(() => {
        ctx.dispatch({ type: 'selected_answer', payload: option });
        setChecked(false);
        setSelected(false);
      }, 2000);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <h4 className="text-white font-bold text-lg">{question}</h4>
      <div className="flex flex-col gap-5">
        {options.map((option, index) => {
          return (
            <label
              key={index}
              className={`${
                checked
                  ? option === correct_answer
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white'
                  : ''
              } bg-white px-2 py-2 rounded-2xl`}
            >
              <span>{option}</span>
              <input
                type="radio"
                name={question}
                value={option}
                disabled={checked}
                checked={selected == option}
                onChange={() => {
                  checkAnswer(option), setChecked(true);
                }}
                className="hidden"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
