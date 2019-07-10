import { get } from '../../services/api';
import Types from '../Types'
export const add = todo => ({
  type: Types.TODO_ADD,
  payload: todo
});

export const toggle = todoId => ({
  type: Types.TODO_TOGGLE,
  payload: todoId
});

export const del = todoId => ({
  type: Types.TODO_DELETE,
  payload: todoId,
});

export const getPosts = () => async (dispatch, getState) => {
  // console.log('GetSTATE', getState());
  const { code, data } = await get('/posts');
  if (code === 0) {
    dispatch({
      type: Types.POST_SUCCESS,
      payload: data,
    });
  }
  // console.table(result.data);
  
  // // signUp.data.token <-- Access token here if the above request finished successfully. 
  // dispatch({ type: 'SIGN_UP_SUCCESS' })
};