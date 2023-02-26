import React from "react";
import {useDispatch} from "react-redux"
import { cartActions } from "../store/cart-slice";
import {Button} from 'react-bootstrap';

import "./Product.css";

const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();

const addToCart = () => {
  dispatch(cartActions.addToCart({
    name,
    id,
    price
  }))
}


  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <Button variant="success"onClick={addToCart}>Add to cart</Button>
    </div>
  );
};

export default Product;
