import React from "react";
import { NavLink } from "react-router-dom";

function ItemCard({ options }) {
  return (
    <div className="itemCard" key={options.productId}>
      <div className="itemCardContent">
        <h3 className="itemTitle">{options.name}</h3>
        <div className="itemBody">
          <img src={options.image} alt={options.name} />
          <p>{options.description}</p>
          <div className="bodyComponent">
            <p>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(options.price)}
            </p>
            <NavLink to={`/product/${options.productId}`}>
              <button>Weitere Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
