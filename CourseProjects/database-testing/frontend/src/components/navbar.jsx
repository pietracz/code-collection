import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "./CartContext";

function Nav() {
  const { getCartItemCount } = useContext(CartContext);
  const cartItemCount = getCartItemCount();

  return (
    <>
      <header>
        <nav className="navbarWrapper">
          <div>
            <h1>SmartShop</h1>
            <p>Get your smart combination right now</p>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/smartphones">Smartphones</NavLink>
            </li>
            <li>
              <NavLink to="/smartwatches">Smartwatches</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/cart">
                <BsCart2 />
                {cartItemCount > 0 && (
                  <span className="cart-count">{cartItemCount}</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
