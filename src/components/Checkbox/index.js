import React from 'react';
import './checkbox.scss';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="container">
      <input type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  )
}
export default  Checkbox;