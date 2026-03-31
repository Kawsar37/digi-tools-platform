import React, { Suspense } from "react";
import Products from "./Products";
import Cart from "./Cart";
import Loading from "../ui/Loading";

const fetchProducts = async () => {
  const res = await fetch("./data.json");
  return res.json();
};
const productPromise = fetchProducts();

export default function DigitalTools({
  cartItems,
  setCartItems,
  selectedType,
  setSelectedType,
}) {
  return (
    <div id="cart">
      <div className="container mx-auto text-center space-y-4">
        <h1 className="text-4xl font-semibold mt-10 md:mt-20">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>
        <div className="mb-7 md:mb-10">
          <button
            onClick={() => setSelectedType("Products")}
            className={`${selectedType === "Products" ? "btn rounded-full text-white p-bg" : "btn rounded-full bg-transparent border-none"}`}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedType("Cart")}
            className={`${selectedType === "Cart" ? "btn rounded-full text-white p-bg" : "btn rounded-full bg-transparent border-none"}`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {/* Products  */}
      </div>
      {selectedType === "Products" ? (
        <Suspense fallback={<Loading />}>
          <Products
            productPromise={productPromise}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </Suspense>
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </div>
  );
}
