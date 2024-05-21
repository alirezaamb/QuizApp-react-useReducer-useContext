import { Children, createContext, useReducer } from 'react';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  points: 0,
};

const reducer = (
  state: {
    questions: { [x: string]: { correct_answer: string } };
    index: number;
    points: number;
  },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case 'start': {
      return { ...state, status: 'start' };
    }
    case 'received_data': {
      return { ...state, questions: action.payload, status: 'ready' };
    }

    case 'selected_answer': {
      const isCorrcet =
        action.payload === state.questions[state.index].correct_answer;
      return {
        ...state,
        points: isCorrcet ? state.points + 1 : state.points,
        index: state.index + 1,
      };
    }
    case 'finished': {
      return { ...state, status: 'finished' };
    }

    default:
      break;
  }
};

export const QuizContext = createContext({
  state: {
    questions: [],
    status: 'loading',
    index: 0,
    points: 0,
  },
  dispatch: () => {},
});

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
