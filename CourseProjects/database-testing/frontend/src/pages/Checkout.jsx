import React, { useState, useContext } from "react";
import { CartContext } from "../components/CartContext"; // Passe den Pfad an
import Footer from "../components/footer";
import Head from "../components/head";
import Nav from "../components/navbar";

function Checkout() {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validierung für Postleitzahl
    if (name === "postalCode") {
      const isValidPostalCode = /^[0-9]{5}$/.test(value);
      if (!isValidPostalCode) {
        // Hier kannst du eine Fehlermeldung anzeigen oder den Wert korrigieren
        return; // Verhindern, dass ein ungültiger Wert gesetzt wird
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hier kommt die Logik, um die Bestellung an dein Backend zu senden
    // Du musst hier eine API-Anfrage stellen oder eine andere Methode verwenden
    console.log("Bestellung abgeschickt:", formData, cartItems);
  };

  return (
    <>
      <Head site={"Checkout"} />
      <Nav />
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="street">Straße:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="houseNumber">Hausnummer:</label>
            <input
              type="number"
              id="houseNumber"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postleitzahl:</label>
            <input
              type="number"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">Stadt:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Land:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="order-summary">
            <h3>Bestellübersicht</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity} -{" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(item.price)}
                </li>
              ))}
            </ul>
            <p>
              <strong>Gesamtpreis:</strong>{" "}
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(getTotalPrice())}
            </p>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Bestellung abschließen
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
