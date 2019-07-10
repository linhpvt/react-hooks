import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PostRow from './PostRow';

export default () => {
  const posts = useSelector(state => {
    const {
      todoData: {
        posts = [],
      } = {}
    } = state;
    return posts;
  });
  // console.log('POST TABLE', posts.length);
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>UserId</th>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
      {posts.map(post => <PostRow key={post.id} {...post} />)}
    </tbody>
  </Table> 
  );
};