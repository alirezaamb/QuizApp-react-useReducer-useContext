import axios from 'axios';
import { useContext, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';

const Setup = () => {
  const [numQuestions, setNumQuestions] = useState(5);
  const [category, setCategory] = useState('21');
  const [difficulity, setDifficulity] = useState('easy');

  const ctx = useContext(QuizContext);
  async function submitHandler(event) {
    event.preventDefault();
    const data = {
      numQuestions,
      category,
      difficulity,
    };
    const questions = await axios.get(
      `https://opentdb.com/api.php?amount=${data.numQuestions}&category=${data.category}&difficulty=${data.difficulity}`
    );
    ctx.dispatch({
      type: 'received_data',
      payload: questions.data.results,
    });
  }
  return (
    <div>
      <h2>Setup Quiz</h2>
      <form onSubmit={submitHandler}>
        <label>
          <p>Number of Questions:</p>
          <input
            type="number"
            placeholder="choose question between 5 to 50 "
            min={5}
            max={50}
            value={numQuestions}
            onChange={(event) => setNumQuestions(+event.target.value)}
          />
        </label>
        <label>
          <p>Category</p>
          <select
            value={category}
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
            onChange={(event) => setDifficulity(event.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <button type="submit">START</button>
      </form>
    </div>
  );
};

export default Setup;
