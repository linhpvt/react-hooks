import React, { useRef, useEffect } from 'react';
import { isEmpty } from 'lodash';
import './scss.scss';

const TodoForm = props => {
  const { onTextChange, onSubmit, text } = props || {};
  const textRef = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (!isEmpty(text)) {
      textRef.current.focus();
      onSubmit();
    }
  };
  const onChange = e => onTextChange(e.target.value);

  useEffect(() => {
    textRef.current.focus();
  }, [textRef]);

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={onChange}
        ref={textRef}
        value={text}
        type="text">
      </input>
      <button onClick={submitHandler}>
        Add
      </button>
    </form>
  );
}
export default TodoForm;