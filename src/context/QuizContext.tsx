// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { ReactNode, createContext, useReducer } from 'react';

// const initialState = {
//   questions: [],
//   status: 'loading',
//   index: 0,
//   points: 0,
// };

// const reducer = (
//   state: {
//     questions: { [x: string]: { correct_answer: string } };
//     index: number;
//     points: number;
//   },
//   action: { type: any; payload: any }
// ) => {
//   switch (action.type) {
//     case 'start': {
//       return { ...state, status: 'start' };
//     }
//     case 'received_data': {
//       return { ...state, questions: action.payload, status: 'ready' };
//     }

//     case 'selected_answer': {
//       const isCorrcet =
//         action.payload === state.questions[state.index].correct_answer;
//       return {
//         ...state,
//         points: isCorrcet ? state.points + 1 : state.points,
//         index: state.index + 1,
//       };
//     }
//     case 'finished': {
//       return { ...state, status: 'finished' };
//     }

//     default:
//       break;
//   }
// };

// export const QuizContext = createContext<{
//   state: {
//     questions: {
//       type: string;
//       difficulty: string;
//       category: string;
//       question: string;
//       correct_answer: string;
//       incorrect_answers: string[];
//     }[];

//     status: string;
//     index: number;
//     points: number;
//   };
//   dispatch: React.Dispatch<{ type: string; payload?: string }>;
// }>({
//   state: {
//     questions: [],
//     status: 'loading',
//     index: 0,
//     points: 0,
//   },
//   dispatch: () => {},
// });

// export const QuizProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <QuizContext.Provider value={{ state, dispatch }}>
//       {children}
//     </QuizContext.Provider>
//   );
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useReducer, Dispatch } from 'react';

// Define types for the state and actions
interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface State {
  questions: Question[];
  status: 'loading' | 'start' | 'ready' | 'finished';
  index: number;
  points: number;
}

interface Action {
  type: 'start' | 'received_data' | 'selected_answer' | 'finished';
  payload?: any;
}

// Initial state
const initialState: State = {
  questions: [],
  status: 'loading',
  index: 0,
  points: 0,
};

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'start': {
      return { ...state, status: 'start' };
    }
    case 'received_data': {
      return { ...state, questions: action.payload, status: 'ready' };
    }
    case 'selected_answer': {
      const isCorrect =
        action.payload === state.questions[state.index].correct_answer;
      return {
        ...state,
        points: isCorrect ? state.points + 1 : state.points,
        index: state.index + 1,
      };
    }
    case 'finished': {
      return { ...state, status: 'finished' };
    }
    default:
      return state;
  }
};

// Create context
export const QuizContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Provider component
export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
