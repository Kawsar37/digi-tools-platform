import React, { use } from "react";
import ProductCard from "./ProductCard";

export default function Products({ productPromise, setCartItems, cartItems }) {
  const products = use(productPromise);

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
}
