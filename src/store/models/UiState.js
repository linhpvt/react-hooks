import { action } from 'easy-peasy';

export default {
  uiState: {
    startReq: '',
    successReq: '',
    errorReq: '',

    // actions
    startRequest: action((state, payload) => {
      return {
        ...state,
        startReq: payload || 'startRequest',
        successReq: '',
        errorReq: '',
        };
    }),

    successRequest: action((state, payload) => {
      return {
        ...state,
        startReq: '',
        successReq: payload || 'successReq',
        errorReq: '',
        };
    }),

    errorRequest: action((state, payload) => {
      return {
        ...state,
        startReq: '',
        successReq: '',
        errorReq: payload || 'errorReq',
        };
    }),

    resetRequest: action((state) => {
      return {
        ...state,
        startReq: '',
        successReq: '',
        errorReq: '',
        };
    }),
  }
};