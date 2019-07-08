import React from 'react';
import { Image } from 'react-bootstrap';
import './cart.scss';
import cart from '../../assets/images/cart.png';
const Cart = () => {
  return (
    <div className="cart">
      <Image className="cart-img rounded-circle" src={cart} />
      {/* <img className="rounded-circle" src={cart} alt="Cart" /> */}
    </div>
  );
}
export default Cart;