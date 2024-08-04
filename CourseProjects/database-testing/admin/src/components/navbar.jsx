import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <nav className="navbarWrapper">
          <div>
            <h1>SmartShop</h1>
            <p>Admin Dashboard</p>
          </div>
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/products">Produkte</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Bestellungen</NavLink>
            </li>
            <li>
              <NavLink to="/customer">Kunden</NavLink>
            </li>
            <li>
              <NavLink to="/#">Kontakte</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
