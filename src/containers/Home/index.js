import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './home.scss';
import Todos from '../../components/Todos';
import TodoForm from '../../components/TodoForm';

const Home = () => {
  const { item } = useStoreState(state => state.todos);
  const { addItem, updateItem } = useStoreActions(actions => actions.todos);
  // const { onTextChange, onSubmit } = props || {};
  
  return (
    <div className="home">
      <h1>TODO APPs</h1>
        <TodoForm onSubmit={addItem}
          text={item}
          onTextChange={updateItem} />
        <Todos />
    </div>
  );
}

export default Home;

