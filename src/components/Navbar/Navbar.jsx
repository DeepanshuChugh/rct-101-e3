import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const {isAuth, login, logout} = useContext(AuthContext);
  const {cart} = useContext(CartContext);
  const count = cart.length;

  const handleClick = () => {
    if(isAuth) {
      logout();
    } else {
      login();
    }
  }

  const navStyle={
    display: "flex",
    justifyContent: 'space-between',
    height: '40px',
    alignItems: 'center',
  }
  return (
    <div data-cy="navbar" style={{navStyle}}>
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <div style={{ display: "flex",gap:'25px'}}>
      <span data-cy="navbar-cart-items-count">{`Cart : (${count})`}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}> {isAuth?"Logout" : "Login"} </button>
      </div>
    </div>
  );
};

export default Navbar;