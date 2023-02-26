import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Notificacion from "./components/Notification";
import { uiActions } from "./store/ui-slice";
import { sendCartData } from "./store/cart-actions";
import { fetchData } from "./store/cart-actions";
let isFirstRender = true;

function App() {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)

  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false;
      return;
    }
    if(cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart,dispatch])

  return (
    <div className="App">
      {notification && <Notificacion type={notification.type} message={notification.message}/>}
      {
        !isLoggedIn ?
        <Auth />
        :
        <Layout />
      }
      
    </div>
  );
}

export default App;
