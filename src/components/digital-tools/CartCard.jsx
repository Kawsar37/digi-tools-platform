import React from "react";

export default function CartCard({ cartItem, cartItems, setCartItems }) {
  return (
    <div className="flex justify-between items-center bg-[#F9FAFC] p-5 rounded-lg ring-1 ring-base-300 mb-4">
      <div className="flex justify-between items-center gap-4">
        <p className="text-3xl h-15 w-15 rounded-full bg-blue-200/40 flex justify-center items-center">
          {cartItem.icon}
        </p>
        <div>
          <h6>{cartItem.name}</h6>
          <p className="text-gray-500">${cartItem.price}</p>
        </div>
      </div>
      <button
        className="text-red-500 cursor-pointer"
        onClick={() =>
          setCartItems(cartItems.filter((item) => item.id != cartItem.id))
        }
      >
        Remove
      </button>
    </div>
  );
}
