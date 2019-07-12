import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Col, Button } from "react-bootstrap";
import uuid from "uuid/v4";
import * as TodoActions from "../../react-redux-hook/actions/TodoActions";

export default () => {
  const inputRef = useRef();
  const [input, setInput] = useState("");

  // ref to dispatch func of store
  const dispatch = useDispatch();

  // bind to which actions will being used for this component
  const actions = bindActionCreators(TodoActions, dispatch);
  useEffect(() => inputRef.current.focus());

  const onSubmit = event => {
    event.preventDefault();
    if (input.trim() === "") return;

    // dispatch action
    actions.add({ id: uuid(), name: input.trim(), complete: false });

    // reset form
    setInput("");
  };
  const onChange = event => setInput(event.target.value);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Row>
        <Col>
          <Form.Control
            placeholder="Todo ..."
            type="text"
            value={input}
            onChange={onChange}
            ref={inputRef}
          />
        </Col>
        <Col>
          <Button type="submit" onClick={onSubmit}>
            Add
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};
