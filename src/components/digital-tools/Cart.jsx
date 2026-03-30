import React from "react";
import EmptyCart from "./EmptyCart";
import CartCard from "./CartCard";

export default function Cart({ cartItems, setCartItems }) {
  return (
    <div>
      <div className="container ring-1 ring-base-300 rounded-lg p-5 md:p-10">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            {cartItems.map((cartItem) => (
              <CartCard
                cartItem={cartItem}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
            <div className="flex justify-between mt-2">
              <p className="text-gray-400">Total:</p>{" "}
              <p className="text-2xl font-semibold">
                $
                {cartItems
                  .map((item) => item.price)
                  .reduce((sum, cur) => sum + cur, 0.0)
                  .toFixed(2)}
              </p>
            </div>
            <button
              className="btn rounded-full text-white p-bg w-full mt-4"
              onClick={() => setCartItems([])}
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
