import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and
 *  (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord: string): any => {
  return function(dispatch: Function, getState: any){
    const secretWord: string = getState().secretWord.toLowerCase();
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });
    
    if(guessedWord.toLowerCase() === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  }
};

export const getSecretWord = () => {
  return (dispatch: any) => {
    return axios.get('http://localhost:3030')
      .then(response => {
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data
        });
      })
      .catch((error: any) => {
        const index = Math.floor(Math.random() * secretWords.length);
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: secretWords[index]
        });
      });
  }
}

const secretWords = [
  'Hello',
  'train',
  'party',
  'dog',
  'cat',
  'candy'
];