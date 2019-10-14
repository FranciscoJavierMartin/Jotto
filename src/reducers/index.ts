import { combineReducers } from "redux";
import success from './successReducer';
import guessWords from './guessedWordsReducers';
import secretWord from './secretWordReducer';

export default combineReducers({
  success,
  guessWords,
  secretWord,
});