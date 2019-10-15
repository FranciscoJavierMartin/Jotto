import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { storeFactory } from '../test/testUitls';
import App, { UnconnectedApp } from './App';
import { IGuessedWord } from './common/interfaces';

/**
 * @function setup
 * @param {object} state - State for this setup
 * @returns {ShallowWrapper}
 */

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('redux properties', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test('has access to `guessedWords`state', () => {
    const guessedWords: IGuessedWord[] = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessWordsProp = wrapper.instance().props.guessedWords;
    expect(guessWordsProp).toEqual(guessedWords);
  });

  test('`getSecretWord`action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  const wrapper: ShallowWrapper = shallow(<UnconnectedApp {...props} />);

  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
