import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; 2024 SmartShop. All rights reserved.</p>
      <div>
        <ul>
          <li>
            <NavLink to="/impressum">Impressum</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/termsofuse">Nutzerbedingungen</NavLink>
          </li>
          <li>
            <NavLink to="/privacy">Datenschutzerklärung</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
