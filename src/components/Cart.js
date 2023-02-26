import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Badge from 'react-bootstrap/Badge';
import "./Cart.css";
const Cart = () => {

  const quantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }
  
  return (
    <div className="cartIcon">
      {
        quantity === 0 ?
        <h3>Empty</h3> 
        : 
        <h3 onClick={showCart}> cart <Badge bg="warning" text="dark">{quantity}</Badge> </h3>
      }
    </div>
  );
};

export default Cart;
