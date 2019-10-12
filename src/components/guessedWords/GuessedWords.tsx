import React from 'react';
import { IGuessedWord } from '../../common/interfaces';

export interface IGuessedWordsProps{
    guessedWords: IGuessedWord[];
}

const GuessedWords = (props: IGuessedWordsProps) => {
    let contents = props.guessedWords.length === 0
    ? (
        <span data-test='guess-instructions'>
            Try to guess the secret word!
        </span>
    ) : null;

    return (
        <div data-test='component-guessed-words'>
            { contents }
        </div>
    );
}

export default GuessedWords;