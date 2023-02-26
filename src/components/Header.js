import React from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {

  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(authActions.logout())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
          <Button variant="danger" onClick={logout}>Cerrar Sesión</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
