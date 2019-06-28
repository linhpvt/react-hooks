import React from 'react';
import Checkbox from '../Checkbox';
import './todo.scss';

const Todo = ({ complete, id, title, toggleItem, deleteItem }) => {
  const cssComplete = complete ? 'row complete' : 'row';
  const onCheckChange = id => e => toggleItem(id);
  const onDeleteClick = id => e => deleteItem(id);
  return (
  <div className={cssComplete} key={id}>
    <div className="div-checkbox">
      <Checkbox
        checked={complete}
        onChange={onCheckChange(id)}
      />
    </div>
    <div className="div-text">{title}</div>
    <div className="div-button">
      <button onClick={onDeleteClick(id)} >X</button>
    </div>
  </div>);
}
export default Todo;