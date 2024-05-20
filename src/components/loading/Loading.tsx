import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const Loading = () => {
  const ctx = useContext(QuizContext);
  return (
    <div>
      <h1>Quiz</h1>
      <h2>Welcome to Quiz App</h2>
      <button
        onClick={() => {
          ctx.dispatch({ type: 'start' });
        }}
      >
        GET START
      </button>
    </div>
  );
};

export default Loading;
