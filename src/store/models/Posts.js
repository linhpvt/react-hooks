import { action, thunk } from 'easy-peasy';
import { get } from '../../services/api';
import Store from '../../store';
import { startRequestEP, errorRequestEP, successRequestEP, resetRequestEP } from '../../helpers';
export default {
  posts: {
    // data
    item: '',
    items: [],
    // thunks
    getPostsAsync: thunk(async (actions, payload) => {
      // start spinner
      startRequestEP(Store);
      const { code, data, error } = await get('/posts');
      if (code !== 0) {
        // show error
        errorRequestEP(Store, error);
        return;
      }
      // stop spinner
      resetRequestEP(Store);
      actions.getPosts(data);
      // show success
      successRequestEP(Store);
    }),

    // actions
    getPosts: action((state, items) => {
      return {
        ...state,
        items
        };
    }),
  }
};