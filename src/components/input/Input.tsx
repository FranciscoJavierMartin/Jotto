import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

interface IInputProps {
  store: any;
  success: boolean;
}

class Input extends Component<IInputProps> {
  render() {
    const content = this.props.success ? <div/> : (
      <form className='form-inline'>
        <input
          data-test="input-box"
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          type='submit'>
          Submit
        </button>
      </form>
    );
    return <div data-test='component-input'>{content}</div>;
  }
}

const mapStateToProps = ({ success }: any) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(Input);
