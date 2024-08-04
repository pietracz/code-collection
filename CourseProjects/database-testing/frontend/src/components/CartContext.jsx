import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartItemCount: () => 0,
  getTotalPrice: () => 0, // Neue Funktion für den Gesamtpreis
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    console.log("Hallo");
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productId === product.productId
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.productId === itemId) {
          return {
            ...item,
            quantity: newQuantity >= 1 ? newQuantity : 1, // Menge mindestens 1
          };
        } else {
          return item; // Andere Artikel unverändert lassen
        }
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getCartItemCount,
        getTotalPrice,
        updateCartItemQuantity, // Funktion in den Wert aufnehmen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
