import { useContext } from 'react';
import Loading from './components/loading/Loading';
import { QuizContext } from './context/QuizContext';
import Setup from './components/setup/Setup';
import Question from './components/question/Question';
import Result from './components/result/Result';

function App() {
  const { state } = useContext(QuizContext);

  return (
    <div className="">
      {state.status === 'loading' && <Loading />}
      {state.status === 'start' && <Setup />}
      {state.status === 'ready' && <Question />}
      {state.status === 'finished' && <Result />}
    </div>
  );
}

export default App;
