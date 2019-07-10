import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './home.scss';
import Todos from '../../components/Todos';
import TodoForm from '../../components/TodoForm';
import { Container, Table } from 'react-bootstrap';

const Home = () => {

  const { item } = useStoreState(state => state.todos);
  const { items } = useStoreState(state => state.posts);

  const {
    todos: { addItem, updateItem } = {},
    posts: { getPostsAsync } = {}
  } = useStoreActions(actions => actions);
  
  // console.log('render', items.length);
  useEffect(() => {
    getPostsAsync();
  }, [getPostsAsync]);

// 0903848022 aBac
  return (
    <Container fluid>
      <h1 className="display-4">TODO APPs</h1>
      <TodoForm onSubmit={addItem}
        text={item}
        onTextChange={updateItem} />
      <Todos />
      <Table bordered striped variant="dark" size="sm">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {items.map(post => <tr key={post.id}>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
export default React.memo(Home);