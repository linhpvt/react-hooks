import React from 'react';
import logo from '../../assets/images/logo.jpg';
import './logo.scss';
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="This is site logo" />
    </div>
  );
}
export default Logo;