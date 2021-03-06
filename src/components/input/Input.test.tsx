import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUitls';
import Input, { UnconnectedInput } from './Input';
import { guessWord } from '../../actions';
import { wrap } from 'module';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}): ShallowWrapper => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store}/>).dive().dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper: ShallowWrapper;
    
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not render submit button', () => {
      const submit = findByTestAttr(wrapper, 'submit-button');
      expect(submit.length).toBe(0);
    });
  });

});

describe('redux props', () => {
  
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('`guessWord`action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });

});

describe('`guessWord` action creator', () => {
  let guessWordMock: jest.Mock<any, any>;
  let wrapper: ShallowWrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock}/>);

    wrapper.setState({ currentGuess: guessedWord });

    const submit =findByTestAttr(wrapper, 'submit-button');
    submit.simulate('click', { preventDefault() {} });
  });

  test('`guessWord` was called once', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('calls `guessWord with input value as argument`', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });

  test('input box clears on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  })
});