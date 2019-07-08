import React, { useEffect, useRef } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './home.scss';
import Todos from '../../components/Todos';
import TodoForm from '../../components/TodoForm';
import { Container, Table } from 'react-bootstrap';

const Home = () => {
  const {
    // todos: { item },
    posts: { items }
  } = useStoreState(state => state);
  const {
    // todos: { addItem, updateItem },
    posts: { getPostsAsync }
  } = useStoreActions(actions => actions);
  const firstLoad = useRef();
  console.log('render', items.length);
  // const { onTextChange, onSubmit } = props || {};
  useEffect(() => {
    console.log('RRRRRRRRRRRRRRRRRRRR');
    getPostsAsync();
  }, [firstLoad]);

  return (
    <Container fluid>
      {/* <h1 className="display-4">TODO APPs</h1>
      <TodoForm onSubmit={addItem}
        text={item}
        onTextChange={updateItem} />
      <Todos /> */}
      <Table bordered striped variant="dark" size="sm">
        <thead>
          <tr>
            <th>USER ID</th>
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

export default Home;

