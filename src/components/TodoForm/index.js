import React, { useRef, useEffect } from 'react';
import { isEmpty } from 'lodash';
import './scss.scss';
import { Button, Form } from 'react-bootstrap';

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
    <Form inline onSubmit={submitHandler}>
      <Form.Control
        type="text"
        ref={textRef}
        onChange={onChange}
        value={text}
        placeholder="To do item ..." />
      <Button className="ml-3" onClick={submitHandler} variant="success">Add Todo</Button>
    </Form>
  );
}
export default TodoForm;