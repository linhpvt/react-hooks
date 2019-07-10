import React from 'react';
import { useSelector } from 'react-redux';
import RenderRow from './RenderRow';
import './todolist.scss';

export default () => {
  const { list = [] } = useSelector(state => state.todoData);
  return (
    <>
      <p className="">List of TODO</p>
      {list.map(todo => <RenderRow key={todo.id} {...todo} /> )}
    </>
  );
}
