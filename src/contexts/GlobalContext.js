import React, { createContext, useReducer } from 'react';
import Types from '../constants/types';

export const GlobalContext = createContext();
const initState = {
  apiState: {
    apiStart: '',
    apiSuccess: '',
    apiError: ''
  },
  user: {
    item: {
      firstName: '',
      lasName: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    items: [],
  }
};
const globalReducer = (state, action) => {
  switch(action.type) {
    case Types.USER_UPDATE: {
      let { user, user: { item = {} } } = state;
      item = {...item, ...action.payload };
      user = { ...user, item };
      return { ...state, user };
    }
    case Types.USER_ADD: {
      let { user, user: { item, items = [] } } = state;
      items = [item, ...items];
      user = { ...user, item: {}, items };
      return { ...state, user };
    }
    case Types.USER_DELETE: {
      let { user, user: { items = [] } } = state;
      const { id } = action.payload;
      items = items.filter(item => item.id !== id);
      user = { ...user, items };
      return { ...state, user };
    }
    case Types.USER_LIST: {
      let { user } = state;
      const { items } = action.payload;
      user = { ...user, items };
      return { ...state, user };
    }
    case Types.API_RESET:
    case Types.API_REQUEST:
    case Types.API_SUCCESS:
    case Types.API_ERROR: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default props => {
  const[ globalStore, dispatch ] = useReducer(globalReducer, initState);

  return (
  <GlobalContext.Provider value={{ globalStore, dispatch }}>
    {props.children}
  </GlobalContext.Provider> 
  )
};