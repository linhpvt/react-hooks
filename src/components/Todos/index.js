import React from 'react';
import {Table } from 'react-bootstrap';
import Todo from '../Todo';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Todos = () => {
  const { items = [] } = useStoreState(state => state.todos);
  const { toggleItem, deleteItem } = useStoreActions(actions => actions.todos);
  const props = { toggleItem, deleteItem };
  return <Table bordered className="mt-2">
    <tbody>
      {items.map(todo => {
        todo = { ...todo, ...props };
        return (<Todo key={todo.id} { ...todo } />)
      })}
    </tbody>
  </Table>
}
export default Todos;