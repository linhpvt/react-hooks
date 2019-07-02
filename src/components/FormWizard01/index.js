import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Types from'../../constants/types';
import './formwizard01.scss';
import { get } from '../../services/api';
import { reqStart, reqSuccess, reqError } from '../../helpers';

const getPostList = async dispatch => {
  // fetching data
  reqStart(dispatch);
  
  const { code, data } = await get('/posts');
  if (code !== 0) {
    reqError(dispatch);
    return;
  }
  // call api success
  reqSuccess(dispatch);

  // update list user.
  dispatch({
    type: Types.USER_LIST,
    payload: { items: data }
  });
}

const FormWizard01 = () => {
  const {
    globalStore: {
      user = {}
    } = {},
    dispatch
  } = useContext(GlobalContext);
  const {
    item: {
      firstName = '',
      lastName = '',
      dob = '',
    } = {}
  } = user;
  const firstNameRef = useRef();
  useEffect(() => {
    firstNameRef.current.focus();
    getPostList(dispatch);
  }, [firstNameRef, dispatch]);

  const updateField = fieldName => e => {
    dispatch({
      type: Types.USER_UPDATE,
      payload: { [fieldName]: e.target.value }
    });
  };
  return (
    <div className="form1">
      <h3>Form Wizard 01</h3>
      <div className="form1-container">
        <div className="form1-row">
          <label className="form1-cell text-align-right" htmlFor="firstName">First name: </label>
          <input
            value={firstName}
            ref={firstNameRef}
            onChange={updateField('firstName')}
            type="text"
            id="firstName"
            className="form1-cell"
            placeholder="First Name"/>
        </div>
        <div className="form1-row">
          <label className="form1-cell text-align-right" htmlFor="lastName">Last name: </label>
          <input
            value={lastName}
            onChange={updateField('lastName')}
            type="text"
            id="lastName"
            className="form1-cell"
            placeholder="Last Name"/>
        </div>
        <div className="form1-row">
        <label className="form1-cell text-align-right" htmlFor="dob">Date of Birth: </label>
          <input
            value={dob}
            onChange={updateField('dob')}
            type="date"
            id="dob"
            className="form1-cell"
            placeholder="Date of Birth"/>
        </div>
        <div className="form1-row">
          <label className="form1-cell text-align-right">&nbsp;</label>
          <input className="form1-cell" type="button" value="Next"/>
        </div>
      </div>
    </div>
  );
};
export default FormWizard01;