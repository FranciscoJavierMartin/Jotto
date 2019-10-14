import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
export default (state = false, action: any) => {
  let newState;
  
  switch(action.type){
    case actionTypes.CORRECT_GUESS:
      newState = true;
      break;
    default:
      newState = state;
  }

  return newState;
} 