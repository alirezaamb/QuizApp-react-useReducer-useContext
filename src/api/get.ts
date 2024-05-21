import axios from 'axios';

export const getQuestions = async ({ data }) => {
  const questions = await axios.get(
    `https://opentdb.com/api.php?amount=${data.numQuestions}&category=${data.category}&difficulty=${data.difficulity}`
  );
  return questions.data.results;
};
