import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <section>
        <h2>Cart</h2>
        <p>Your cart is empty</p>
      </section>
    );
  }

  return (
    <section>
      <div>
        <h2>Cart</h2>
      </div>

      <div>
        {/* items in the cart */}
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.images} alt="" />
            <div>
              <h3>{item.title}</h3>
              <p>€{item.price}</p>
            </div>

            {/* adjust quantity */}
            <div>
              <button>-</button>
              <span>{item.quantity}</span>
              <button>+</button>
            </div>
            <p>€{(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={removeFromCart}>remove</button>
          </div>
        ))}
      </div>

      {/* total price section*/}
      <div>
        <div>
          <h3>Total:</h3>
          <p>€0000</p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
