import React from "react";
import { CgShoppingCart } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-[75%] mx-auto flex justify-between py-6 items-center">
        <h1 className="font-bold text-2xl sm:text-3xl p-bg bg-clip-text text-transparent">
          DigiTools
        </h1>
        <ul className="flex items-center gap-8">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
        <div className="flex gap-4 items-center">
          {/* shopping cart icon  */}
          <div className="indicator">
            <CgShoppingCart size={24} />
            <span className="badge badge-sm indicator-item bg-blue-500 font-semibold hidden">
              8
            </span>
          </div>

          <button>Login</button>
          <button className="btn rounded-full text-white p-bg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
