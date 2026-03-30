import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { CgShoppingCart } from "react-icons/cg";

export default function DaisyNav({ cartItems }) {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-45">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <h1 className="font-bold text-2xl sm:text-3xl p-bg bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex!">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-1 sm:gap-4 items-center">
        <div className="indicator">
          <CgShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="badge badge-sm indicator-item bg-blue-500 font-semibold">
              {cartItems.length}
            </span>
          )}
        </div>

        <button>Login</button>
        <PrimaryButton text={"Get Started"} />
      </div>
    </div>
  );
}
