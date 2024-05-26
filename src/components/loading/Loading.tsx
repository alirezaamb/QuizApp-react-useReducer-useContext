import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const Loading = () => {
  const ctx = useContext(QuizContext);
  return (
    <div className="flex flex-col justify-center items-center gap-24">
      <h1 className="mt-5 text-yellow-500 font-extrabold text-3xl border-b-2  pb-3">
        Quiz
      </h1>
      <h2 className="text-white font-semibold">Welcome to Quiz App</h2>
      <button
        className="text-white font-semibold rounded-3xl hover:bg-gray-300 px-3 py-2 transition-all"
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
