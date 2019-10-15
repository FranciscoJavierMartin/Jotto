import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Congrats from './components/congrats/Congrats';
import GuessedWords from './components/guessedWords/GuessedWords';
import { getSecretWord } from './actions';
import { IGuessedWord } from './common/interfaces';
import Input from './components/input/Input';

interface IAppProps {
  success: boolean;
  guessedWords: IGuessedWord[];
  //secretWord: string;
  getSecretWord: any;
}

export class UnconnectedApp extends Component<IAppProps, {}> {

  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords
          guessedWords={this.props.guessedWords}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnconnectedApp);
