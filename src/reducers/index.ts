import { combineReducers } from "redux";
import success from './successReducer';
import guessedWords from './guessedWordsReducers';
import secretWord from './secretWordReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
});