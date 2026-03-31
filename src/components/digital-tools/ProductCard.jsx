import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

export default function ProductCard({ product, setCartItems }) {
  //  {
  // "id": 8,
  // "name": "Ultimate Career Bundle",
  // "description": "All-in-one premium bundle for job seekers.",
  // "price": 99.99,
  // "period": "yearly",
  // "tag": "best seller",
  // "tagType": "best seller",
  // "features": [
  //   "Everything in Pro",
  //   "Interview preparation",
  //   "Portfolio builder",
  //   "Priority AI support"
  // ],
  // "icon": "🚀"
  //   }
  return (
    <div className="ring-1 ring-base-300 rounded-lg space-y-4 p-6 flex flex-col">
      <div className="flex justify-between relative">
        <p className="text-6xl -ml-3">{product.icon}</p>
        <p
          className={`${product.tag === "best seller" ? "text-[#BB4D00] bg-[#FEF3C6]" : product.tag === "popular" ? "bg-[#E1E7FF] text-[#9514FA]" : "text-[#0A883E] bg-[#DBFCE7]"} rounded-full justify-center items-center absolute px-3 py-1.5 -top-4 -right-4`}
        >
          {product.tag}
        </p>
      </div>
      <h4 className="text-2xl font-semibold">{product.name}</h4>
      <p className="text-[#627382]">{product.description}</p>
      <p>
        <span className="text-2xl font-semibold">${product.price}</span>
        <span className="text-xl text-[#627382]">/{product.period}</span>
      </p>
      <ul>
        {product.features.map((feature, ind) => (
          <li key={ind} className="flex items-center gap-1.5 text-[#627382]">
            <IoMdCheckmark color="#30B868" /> {feature}
          </li>
        ))}
      </ul>

      <button
        className="btn rounded-full text-white p-bg w-full mt-auto"
        onClick={() => {
          setCartItems((prev) => [...prev, product]);
          toast.success("Added to cart");
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
