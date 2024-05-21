import axios from 'axios';
import { useContext, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { getQuestions } from '../../api/get';

const Setup = () => {
  const [numQuestions, setNumQuestions] = useState(5);
  const [category, setCategory] = useState('21');
  const [difficulity, setDifficulity] = useState('easy');

  const ctx = useContext(QuizContext);
  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    const data = {
      numQuestions,
      category,
      difficulity,
    };
    const questions = await getQuestions({ data });
    ctx.dispatch({
      type: 'received_data',
      payload: questions,
    });
  }
  return (
    <div className="flex flex-col justify-center items-center p-5 relative">
      <h2 className=" font-extrabold text-xl">Setup Quiz</h2>
      <form onSubmit={submitHandler} className="w-full flex flex-col">
        <div>
          <label>
            <p>Number of Questions:</p>
            <input
              type="number"
              placeholder="choose question between 5 to 50 "
              min={5}
              max={50}
              value={numQuestions}
              onChange={(event) => setNumQuestions(+event.target.value)}
              className="w-full  p-1 rounded bg-gray-200"
            />
          </label>
          <label>
            <p>Category</p>
            <select
              value={category}
              className="w-full  p-1 rounded bg-gray-200"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="28">cars</option>
            </select>
          </label>
          <label>
            <p>Difficulity</p>
            <select
              value={difficulity}
              className="w-full  p-1 rounded bg-gray-200"
              onChange={(event) => setDifficulity(event.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="mt-10 text-white font-semibold rounded-3xl px-3 py-2 hover:bg-gray-300 transition-all w-fit self-center"
        >
          START
        </button>
      </form>
    </div>
  );
};

export default Setup;
