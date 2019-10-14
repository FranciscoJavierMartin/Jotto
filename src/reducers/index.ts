import { combineReducers } from "redux";
import success from './successReducer';
import guessWords from './guessedWordsReducers';

export default combineReducers({
  success,
  guessWords,
})