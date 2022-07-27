import axios from 'axios';

const API_URL = 'https://opentdb.com';

// Get Questions
const getQuiz = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/api.php?amount=10&difficulty=hard&type=boolean`,
    );
    return data;
  } catch (error) {
    return error;
  }
};

const quizService = {
  getQuiz,
};

export default quizService;
