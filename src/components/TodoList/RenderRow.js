import React from 'react';
import { Row, Col, Button, FormCheck } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../react-redux-hook/actions/TodoActions';

const RenderRow = ({ id, name, complete }) => {
  const dispatch = useDispatch();
  const actions =  bindActionCreators(TodoActions, dispatch);
  // console.log('RenderRow', name);
  
  const onDelete = todoId => () => actions.del(todoId);
  const onToggle = todoId => () => actions.toggle(todoId);
  const completeCss = complete 
    ? 'bg-light m-2 align-items-center justify-content-between complete' 
    : 'bg-light m-2 align-items-center justify-content-between';
  return (
    <Row
      className={completeCss}>
      <Col className="col-1 left-most">
        <FormCheck
          custom
          checked={complete}
          type="checkbox"
          onChange={onToggle(id)}
          id={id}
          label=""></FormCheck>
      </Col>
      <Col>{name}</Col>
      <Col className="col-1 right-most">
        <Button variant="danger" onClick={onDelete(id)}>X</Button>
      </Col>
    </Row>
  );
}
export default React.memo(RenderRow);
