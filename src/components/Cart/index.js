import React from 'react';
import './cart.scss';
import cart from '../../assets/images/cart.png';
const Cart = () => {
  return (
    <div className='cart'>
      <img src={cart} alt="Cart" />
    </div>
  );
}
export default Cart;