import React, { useContext } from "react";
import "./Warenkorb.css";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Warenkorb() {
  const { cartItems, removeFromCart, getTotalPrice, updateCartItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = getTotalPrice();

   const handleCheckout = () => {
    // Überprüfen, ob der Warenkorb leer ist
    if (cartItems.length === 0) {
      alert("Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, um fortzufahren."); // Oder eine andere Fehlermeldung
      return;
    }

    navigate("/checkout"); // Weiterleitung zur Checkout-Seite (du musst diese Seite noch erstellen)
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) { // Sicherstellen, dass die Menge nicht unter 1 fällt
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="warenkorb">
      <button className="continue-shopping" onClick={() => navigate(-1)}>
        Weiter einkaufen
      </button>

      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <h3 className="product-name">{item.name} - {item.color}</h3>
                  <p className="product-price">
                    {item.quantity} x{" "}
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price)}
                  </p>
                </div>
                <div className="quantity-controls"> {/* Neuer Container für die Buttons */}
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="total">
            <p className="total-price">
              Gesamtpreis:{" "}
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(totalPrice)}
            </p>
            <button className="checkout-button" onClick={handleCheckout}>Zur Kasse gehen</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Warenkorb;
