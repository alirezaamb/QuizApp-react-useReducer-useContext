import axios from 'axios';
import { DataType } from '../utils/type';

export const getQuestions = async ({ data }: { data: DataType }) => {
  const questions = await axios.get(
    `https://opentdb.com/api.php?amount=${data.numQuestions}&category=${data.category}&difficulty=${data.difficulity}`
  );
  return questions.data.results;
};
