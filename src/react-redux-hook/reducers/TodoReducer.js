import uuid from 'uuid/v4';
import Types from '../Types';

const initState = {
  list: [{
    id: uuid(),
    name: 'Create mockup UI',
    complete: false,
  }, {
    id: uuid(),
    name: 'Intergrate function to mockup UI',
    complete: true,
  }],
  posts: [],
};
export default (state = initState, { type, payload }) => {
  switch (type) {
    case Types.TODO_ADD: {
      let { list = [] } = state;
      list = [payload, ...list];
      return { ...state, list };
    }
    case Types.TODO_TOGGLE: {
      let { list = [] } = state;
      list = list.map(todo => (todo.id === payload
        ? { ...todo, complete: !todo.complete }
        : todo));
      return { ...state, list };
    }
    case Types.TODO_DELETE: {
      let { list = [] } = state;
      list = list.filter(todo => todo.id !== payload);
      return { ...state, list };
    }
    case Types.POST_SUCCESS: {
      return { ...state, posts: payload };
    }

    default:
      return state;
  }
}
