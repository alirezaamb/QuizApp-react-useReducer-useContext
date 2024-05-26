import { useContext } from 'react';
import Loading from './components/loading/Loading';
import { QuizContext } from './context/QuizContext';
import Setup from './components/setup/Setup';
import Question from './components/question/Question';
import Result from './components/result/Result';

function App() {
  const ctx = useContext(QuizContext);

  return (
    <div className=" rounded bg-gray-400 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-1/2 h-1/2">
      {ctx.state.status === 'loading' && <Loading />}
      {ctx.state.status === 'start' && <Setup />}
      {ctx.state.status === 'ready' && <Question />}
      {ctx.state.status === 'finished' && <Result />}
    </div>
  );
}

export default App;
