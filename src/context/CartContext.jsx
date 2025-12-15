import { createContext, useCallback, useContext, useState } from "react";

// creates an object with Provider
const CartContext = createContext(null);

// a component that wraps my app and supplies the context value
export function CartProvider({ children }) {
  // cart state
  const [cartItems, setCartItems] = useState([]);

  //   add item to cart
  const addToCart = useCallback((book) => {
    setCartItems((prev) => {
      // check if the book already exists in cart
      const existingItem = prev.find((item) => item.id === book.id);

      if (existingItem) {
        // increment quantity
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // add it with quantity 1
        return [...prev, { ...book, quantity: 1 }];
      }
    });
  }, []);

  // remove item from cart
  const removeFromCart = useCallback((bookId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== bookId));
  }, []);

  //   update quantity of a specific item
  const updateQuantity = useCallback((bookId) => {
    if (cartItems.find((item) => item.id === bookId)) {
    }
  }, []);

  //   clear entire cart

  // get total number of items in cart

  // get total price of all items

  // check if item is in cart

  //   value
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext value={value}>{children}</CartContext>;
}

// custom hook for using the context in any components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
