import { combineReducers } from 'redux';
import quizReducer from '../features/quiz/quizSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
