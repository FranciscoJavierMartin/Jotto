import { actionTypes } from '../actions';

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {array} - new guessed state.
 */
export default (state=[], action: any): any[] => {
  let res: any[];

  switch(action.type){
    case actionTypes.GUESS_WORD:
      res = [...state, action.payload];
      break;
    default:
      res = [...state];
  }

  return res;
}