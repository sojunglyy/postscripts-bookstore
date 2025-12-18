import React from "react";
import { useCart } from "../context/useCart";

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
      <section>
        <h2>Cart</h2>
        <p>Your cart is empty</p>
      </section>
    );
  }

  return (
    <section id="cart">
      <div>
        <h2>Cart</h2>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        {/* items in the cart */}
        {cartItems.map((item) => (
          <div key={item.id} className="w-full flex flex-row gap-4">
            {/* item image */}
            <div className="w-32 object-contain">
              <img src={item.images} alt="book cover" />
            </div>

            {/* item info */}
            <div className="w-full grid grid-cols-3 items-center justify-items-center">
              <div className="w-full flex justify-center">
                <h3>{item.title}</h3>
              </div>

              {/* adjust quantity */}
              <div className="w-full flex items-center justify-center">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(item.id, (item.quantity ?? 1) - 1)
                  }
                >
                  -
                </button>
                <span className="mx-3">{item.quantity ?? 1}</span>
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
              <div className="w-full flex justify-center">
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
              className="p-2 rounded hover:opacity-80 hover:cursor-pointer"
            >
              <img
                src="/icons/trash_bin.svg"
                alt=""
                aria-hidden="true"
                className="w-5 h-5"
              />
            </button>
          </div>
        ))}
      </div>

      {/* total price section*/}
      <div className="w-1/2 flex flex-col items-center gap-2 mt-14">
        <div className="w-full flex flex-row justify-between">
          <h3>Items:</h3>
          <p className="font-bold">{getTotalItems()}</p>
        </div>

        <div className="w-full flex flex-row justify-between">
          <h3>Total:</h3>
          <p className="font-bold">€{getTotalPrice().toFixed(2)}</p>
        </div>
      </div>

      {/* order */}
      <div className="w-full flex justify-center mt-20">
        <button className="w-48 h-12 bg-black text-white rounded-md">
          Proceed To Check Out
        </button>
      </div>
    </section>
  );
};

export default Cart;
