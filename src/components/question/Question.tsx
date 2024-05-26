import { useContext, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';

const Question = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ctx = useContext(QuizContext);
  const { questions, index } = ctx.state;
  const { question, correct_answer, incorrect_answers } = questions[index];
  const options = [...incorrect_answers, correct_answer].sort();

  const checkAnswer = (option: string) => {
    if (questions.length === index + 1) {
      setTimeout(() => {
        ctx.dispatch({ type: 'finished', payload: option });
        setChecked(false);
      }, 2000);
    } else {
      setTimeout(() => {
        ctx.dispatch({ type: 'selected_answer', payload: option });
        setChecked(false);
        setSelected(null);
      }, 2000);
    }
  };
  console.log(questions);

  return (
    <div className="p-4 flex flex-col gap-4">
      <h4 className="text-white font-bold text-lg">{question}</h4>
      <div className="flex flex-col gap-5">
        {options.map((option, idx) => (
          <label
            key={idx}
            className={`${
              checked
                ? option === correct_answer
                  ? 'text-green-600'
                  : 'text-red-600'
                : ''
            } ${selected === option ? 'bg-gray-600' : 'bg-white'} 
              px-2 py-2 rounded-2xl font-bold cursor-pointer hover:bg-gray-300 transition-all`}
          >
            <span>{option}</span>
            <input
              type="radio"
              name={question}
              value={option}
              disabled={checked}
              checked={selected === option}
              onChange={() => {
                setSelected(option);
                setChecked(true);
                checkAnswer(option);
              }}
              className="hidden"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
