export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and
 *  (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessWord: string): Function => {
  return function(dispatch: Function, getState){

  }
}