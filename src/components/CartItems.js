import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";


const CartItems = () => {

  const quantity = useSelector(state => state.cart.totalQuantity)

  const cartItems = useSelector((state) =>  state.cart.itemsList)
  console.log(cartItems)

  return (
    <>
    {
      quantity === 0 ?
      <h3>Your cart is empty...</h3> 
      :

      <div className="cart-container d-flex flex-column align-items-center">
        <h2>Your Cart</h2>
        <ul className="w-100">
          {
            cartItems.map((item) => (
              <li key={item.id}>
                <CartItem 
                  id={item.id} 
                  price={item.price} 
                  name={item.name}
                  quantity={item.quantity}
                  total={item.price * item.quantity} 
                  img={item.img}
                  />
              </li>))
          }
        </ul>
      </div>
          }
    </>
  );
};

export default CartItems;
