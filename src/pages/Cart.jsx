import React from "react";
import { useCart } from "../context/useCart";
import Navbar from "../components/Navbar";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <section id="cart">
          <p className="empty-cart">Your cart is empty</p>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section id="cart">
        <div className="cart-container">
          {/* items in the cart */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-single-item">
              {/* item image */}
              <div className="cart-image-container">
                <img src={item.images} alt="book cover" />
              </div>

              {/* item info */}
              <div className="cart-item-info">
                <div className="item-title">
                  <h3>{item.title}</h3>
                </div>

                {/* adjust quantity */}
                <div className="item-quantity">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity ?? 1) - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity ?? 1}</span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity ?? 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>

                {/* subtotal price */}
                <div className="item-subtotal">
                  <p>
                    €
                    {((Number(item.price) || 0) * (item.quantity ?? 1)).toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>

              {/* remove button */}

              <button
                type="button"
                aria-label="Remove from cart"
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                <img src="/icons/trash_bin.svg" alt="" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>

        {/* total price section*/}
        <div className="total-price-container">
          <div className="total-items">
            <h3>Items:</h3>
            <p>{getTotalItems()}</p>
          </div>

          <div className="total-price">
            <h3>Total:</h3>
            <p>€{getTotalPrice().toFixed(2)}</p>
          </div>
        </div>

        {/* order */}
        <div className="checkout">
          <button id="checkout-btn" className="custom-btn">
            Proceed To Check Out
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
