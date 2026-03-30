import React from "react";
import circle from "../../assets/circle.svg";
import { IoPlayOutline } from "react-icons/io5";
import PrimaryButton from "../ui/PrimaryButton";
import banner from "../../assets/banner.png";

export default function Hero() {
  return (
    <main>
      <div className="max-w-[75%] mx-auto flex flex-col lg:flex-row md:gap-15 md:my-10 md:items-center md:justify-between">
        <div className="space-y-4 my-6 md:my-0">
          <div className="bg-[#E1E7FF] rounded-full max-w-73.5 p-2 flex items-center justify-center">
            <p className="flex items-center gap-1 p-bg text-transparent bg-clip-text">
              <img src={circle} /> New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="font-bold text-3xl md:text-6xl">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>
          <div className="flex gap-4 flex-wrap">
            <PrimaryButton text={"Explore Products"} />
            <button className="border border-[#9514fa] rounded-full text-[#9514fa] flex items-center px-3 py-1 gap-1 font-semibold hover:bg-[#4f39f6] hover:text-white">
              <IoPlayOutline />
              Watch Demo
            </button>
          </div>
        </div>
        <img src={banner} height={450} width={450} className="mb-6 md:my-0" />
      </div>
      <section className="p-bg p-8">
        <div className="max-w-[75%] mx-auto flex items-center">
          <div className="space-y-2 border-r border-r-white/60 flex-1">
            <p className="md:text-4xl text-2xl text-white font-bold text-center">
              50K+
            </p>
            <p className="text-white text-center">Active Users</p>
          </div>
          <div className="space-y-2 border-r border-r-white/60 flex-1">
            <p className="md:text-4xl text-2xl text-white font-bold text-center">
              200+
            </p>
            <p className="text-white text-center">Premium Tools</p>
          </div>
          <div className="space-y-2 flex-1">
            <p className="md:text-4xl text-2xl text-white font-bold text-center">
              4.9
            </p>
            <p className="text-white text-center">Rating</p>
          </div>
        </div>
      </section>
    </main>
  );
}
