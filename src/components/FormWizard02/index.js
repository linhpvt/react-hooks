import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Types from'../../constants/types';
import './formwizard02.scss';

const FormWizard02 = () => {
  const {
    globalStore: {
      // apiState,
      user = {}
    } = {},
    dispatch
  } = useContext(GlobalContext);
  const {
    item: {
      email = '',
      password = '',
      confirmPassword = '',
    } = {}
  } = user;
  const updateField = fieldName => e => dispatch({
    type: Types.USER_UPDATE,
    payload: { [fieldName]: e.target.value }
  });

  const emailRef = useRef();
  useEffect(() => emailRef.current.focus(), [emailRef])
  return (
    <div className="form2">
      <h3>Form Wizard 02</h3>
      <div className="form2-container">
        <div className="form2-row">
          <label
            className="form2-cell text-align-right"
            htmlFor="email">
            Email:
          </label>
          <input
            value={email}
            ref={emailRef}
            onChange={updateField('email')}
            type="text"
            id="email"
            className="form2-cell"
            placeholder="Email"/>
        </div>
        <div className="form2-row">
          <label
            className="form2-cell text-align-right"
            htmlFor="password">Password:
          </label>
          <input
            value={password}
            onChange={updateField('password')}
            type="password"
            autoComplete="fake-field"
            id="password"
            className="form2-cell"
            placeholder="Password"/>
        </div>
        <div className="form2-row">
        <label
          className="form2-cell text-align-right"
          htmlFor="confirmPassword">Confirm Password: </label>
          <input
            value={confirmPassword}
            autoComplete="fake-field"
            onChange={updateField('confirmPassword')}
            type="password"
            id="confirmPassword"
            className="form2-cell"
            placeholder="Confirm Password"/>
        </div>
        <div className="form2-row">
          <label className="form2-cell text-align-right">&nbsp;</label>
          <input className="form2-cell" type="button" value="Submit"/>
        </div>
      </div>
    </div>
  );
};
export default FormWizard02;