import React from 'react';
import './header.scss';
import Logo from '../Logo';
import Nav from '../Nav';
import Cart from '../Cart';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-logo"><Logo /></div>
      <div className="header-nav"><Nav /></div>
      <div className="header-cart"><Cart /></div>
    </div>
  );
}
export default Header;