import { useCallback, useState } from "react";
import CartContext from "./cartContext";

// a component that wraps my app and supplies the context value
export function CartProvider({ children }) {
  // cart state
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Placeholder",
      author: "Sojung Lee",
      description: "description",
      price: 28,
      images: "/images/placeholder-book.jpg",
      category: "art",
      quantity: 1,
    },
    {
      id: "2",
      title: "Tooth",
      author: "Kevin Perrin",
      description: "description",
      price: 26,
      images: "/images/tooth-book.jpg",
      category: "art",
      quantity: 1,
    },
  ]);

  //   add item to cart
  const addToCart = useCallback((book) => {
    setCartItems((prev) => {
      // check if the book already exists in cart
      const existingItem = prev.find((item) => item.id === book.id);

      if (existingItem) {
        // increment quantity
        return prev.map((item) =>
          item.id === book.id
            ? { ...item, quantity: (item.quantity ?? 0) + 1 }
            : item
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
  const updateQuantity = useCallback((bookId, nextQuantity) => {
    setCartItems((prev) => {
      // if the next quantity is below 0, it removes
      if (nextQuantity <= 0) {
        return prev.filter((item) => item.id !== bookId);
      }

      return prev.map((item) =>
        item.id === bookId ? { ...item, quantity: nextQuantity } : item
      );
    });
  }, []);

  // get total number of items in cart
  const getTotalItems = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + (item.quantity ?? 1), 0);
  }, [cartItems]);

  // get total price of all items
  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const qty = item.quantity ?? 1;
      return sum + price * qty;
    }, 0);
  }, [cartItems]);

  //   value
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
