import Navigator from '../constants/navigator';
import Types from '../constants/types';

export const getNavByTab = tab => {
  const navInfo = Navigator.filter(nav => nav.tab === tab);
  // default to home
  return navInfo[0] || Navigator[0];
}
export const mask = (text = '') => {
  return text.split('').map(c => '*').join('');
}

// global context and reducer
export const reqStart = dispatch => dispatch({
  type: Types.API_REQUEST,
  payload: {
    apiState : {
      apiStart: 'apirequesting',
      apiSuccess: '',
      apiError: '',
    }
  }
});

export const reqSuccess = dispatch => dispatch({
  type: Types.API_SUCCESS,
  payload: {
    apiState : {
      apiStart: '',
      apiSuccess: 'apisuccess',
      apiError: '',
    }
  }
});

export const reqError = dispatch => dispatch({
  type: Types.API_ERROR,
  payload: {
    apiState : {
      apiStart: '',
      apiSuccess: '',
      apiError: 'apierror',
    }
  }
});

export const reqReset = (dispatch, milliseconds) => {
  if (milliseconds) {
    setTimeout(() => {
      dispatch({
        type: Types.API_ERROR,
        payload: {
          apiState : {
            apiStart: '',
            apiSuccess: '',
            apiError: '',
          }
        }
      });
    }, milliseconds);
    return;
  }
  dispatch({
    type: Types.API_ERROR,
    payload: {
      apiState : {
        apiStart: '',
        apiSuccess: '',
        apiError: '',
      }
    }
  });
};



// global spinner UI FOR EASY PEASY
export const startRequestEP = (store, start) => {
  store.getActions().uiState.startRequest(start);
};

export const successRequestEP = (store, success) => {
  store.getActions().uiState.successRequest(success);
};

export const errorRequestEP = (store, error) => {
  store.getActions().uiState.errorRequest(error);
};

export const resetRequestEP = store => {
  store.getActions().uiState.resetRequest();
};
