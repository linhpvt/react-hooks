import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './todo.scss';

const Todo = ({ complete, id, title, toggleItem, deleteItem }) => {
  const cssComplete = complete ? 'todo-row bg-success' : 'todo-row';
  const onCheckChange = id => () => toggleItem(id);
  const onDeleteClick = id => () => deleteItem(id);
  console.log(id);
  return (
  <tr className={cssComplete} key={id}>
    <td className="todo-cb-col">
    <Form.Check
      className=""
      custom
      type="checkbox"
      id="custom-checkbox"
      label= ""
      onChange={onCheckChange(id)}
    />
    </td>
    <td>{title}</td>
    <td className="todo-btn-col">
      <Button
        size="sm"
        type="button"
        onClick={onDeleteClick(id)}
        variant="danger">
        X
      </Button>
    </td>
  </tr>)
}
export default React.memo(Todo);
