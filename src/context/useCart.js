import { useContext } from "react";
import CartContext from "./cartContext";

// custom hook for using the context in any components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
