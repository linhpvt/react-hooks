import React from 'react';
import { Provider } from 'react-redux';
import store from '../../react-redux-hook/store';
import FormInput from '../../components/FormInput';
import TodoList from '../../components/TodoList';
import ReactReduxHook from '../../containers/ReactReduxHook';
import PostList from '../../components/PostList';

export default () => {
  return (
    <Provider store={store}>
      <ReactReduxHook>
        <p className="bg-primary p-1 text-warning">TODO APP With REACT-REDUX-HOOK and THUNK MIDDLEWARE</p>
        <FormInput />
        <TodoList />
        <PostList />
      </ReactReduxHook>
    </Provider>
  )
}