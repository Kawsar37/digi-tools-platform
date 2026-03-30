import React from "react";
import { CgShoppingCart } from "react-icons/cg";

export default function EmptyCart() {
  return (
    <div className="h-100 w-full flex justify-center items-center flex-col gap-4">
      <CgShoppingCart size={50} color="gray" />
      <h4 className="text-gray-500">Your cart is empty</h4>
    </div>
  );
}
