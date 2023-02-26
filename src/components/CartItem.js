import React from "react";
import {Button} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cart-slice";
import "./Cart.css";


const CartItem = ({ name, quantity, total, price, id, img }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price}</p>
      <article>Total ${total}</article>
      <Button variant="danger" className="cart-actions" onClick={removeHandler}>
        -
      </Button>
      <p>x{quantity}</p>
      <Button variant="success" className="cart-actions" onClick={addHandler}>
        +
      </Button>
    </div>
  );
};

export default CartItem;
