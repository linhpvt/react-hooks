import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import * as TodoActions from '../../react-redux-hook/actions/TodoActions';
import { useDispatch, } from 'react-redux';
import { bindActionCreators } from 'redux';

export default props => {
  const dispatch = useDispatch();
  const { getPosts } = bindActionCreators(TodoActions, dispatch);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Container>
      {props.children}
    </Container>
  );
}