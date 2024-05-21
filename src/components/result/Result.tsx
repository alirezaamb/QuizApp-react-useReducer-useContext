import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const Result = () => {
  const ctx = useContext(QuizContext);
  console.log(ctx.state);
  const allItem = ctx.state.index + 1;
  const points = ctx.state.points;
  const calculateTotalPerctageAnswer = (points / allItem) * 100;
  return (
    <div className="flex flex-col justify-between items-center h-full py-7">
      <div
        className="flex flex-col jus
      tify-center items-center gap-10"
      >
        <p className="text-white">
          YOU ANSWER {points} of {allItem} RIGHT
        </p>
        <p className="text-white">
          YOUR SCORE:{Math.floor(calculateTotalPerctageAnswer)}%
        </p>

        <p
          className={`${
            calculateTotalPerctageAnswer > 40 ? 'bg-green-300' : 'bg-red-400'
          } p-2 rounded-3xl`}
        >
          {calculateTotalPerctageAnswer > 40
            ? 'GOOD JOB 😊😊'
            : 'TRY HARDER NEXT TIME 😢😢'}
        </p>
      </div>
      <button
        className="px-3 py-2 hover:bg-gray-300 rounded-3xl transition-all"
        onClick={() => location.reload()}
      >
        TRY AGAIN
      </button>
    </div>
  );
};

export default Result;
