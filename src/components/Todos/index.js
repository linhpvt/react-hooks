import React from 'react';
import Todo from '../Todo';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Todos = () => {
  const {items = []} = useStoreState(state => state.todos);
  const {toggleItem, deleteItem} = useStoreActions(actions => actions.todos);
  // const { todos, dispatch } = useContext(AppContext);
  // const toggleHandler = id => e => { dispatch({ type: Types.TODO_TOGGLE, payload: { id }}) };
  // const deleteHandler = id => e => { dispatch({ type: Types.TODO_DELETE, payload: { id }}) };
  const props = { toggleItem, deleteItem };
  return items.map(todo => {
    todo = { ...todo, ...props };
    return (<Todo key={todo.id} { ...todo } />)
  });
  // return <h1>Implementing</h1>
}
export default Todos;