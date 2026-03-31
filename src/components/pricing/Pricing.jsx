import React from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function Pricing() {
  return (
    <div className="container text-center mb-30!">
      <div>
        <h2 className="font-semibold text-4xl">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-4 mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="text-left flex gap-7 flex-wrap justify-between">
        <div className="flex flex-col gap-6 ring-1 ring-gray-300/70 rounded-xl p-6 bg-[#F2F2F2]/50 flex-1 min-w-90">
          <div>
            <h6 className="font-semibold text-xl">Starter</h6>
            <p className="text-gray-500">Perfect for getting started</p>
          </div>
          <div>
            <p>
              <span className="font-semibold text-4xl">$0</span>
              <span className="text-gray-500 text-lg">/Month</span>
            </p>
          </div>
          <ul className="text-gray-500">
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Access to 10 free tools
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Basic templates
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Community support
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />1 project per month
            </li>
          </ul>
          <button className="p-bg btn rounded-full text-white mt-auto">
            Get Started Free
          </button>
        </div>

        <div className="flex flex-col gap-6 ring-1 ring-gray-300/70 rounded-xl p-6 p-bg text-white flex-1 min-w-90 relative">
          <p className="text-[#BB4D00] bg-[#FEF3C6] px-3 py-1.5 rounded-full max-w-max absolute left-1/2 -translate-1/2 -top-0.5">
            Most Popular
          </p>
          <div>
            <h6 className="font-semibold text-xl">Pro</h6>
            <p className="text-white">Best for professionals</p>
          </div>
          <div>
            <p>
              <span className="font-semibold text-4xl">$29</span>
              <span className="text-white text-lg">/Month</span>
            </p>
          </div>
          <ul className="text-white">
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="white" />
              Access to all premium tools
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="white" />
              Unlimited templates
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="white" />
              Priority support
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="white" />
              Unlimited projects
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="white" />
              Cloud sync
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="white" />
              Advanced analytics
            </li>
          </ul>
          <button className="btn rounded-full bg-white mt-auto">
            <p className="p-bg bg-clip-text text-transparent p-bg">
              Get Started Free
            </p>
          </button>
        </div>

        <div className="flex flex-col gap-6 ring-1 ring-gray-300/70 rounded-xl p-6 bg-[#F2F2F2]/50 flex-1 min-w-90">
          <div>
            <h6 className="font-semibold text-xl">Enterprise</h6>
            <p className="text-gray-500">For teams and businesses</p>
          </div>
          <div>
            <p>
              <span className="font-semibold text-4xl">$99</span>
              <span className="text-gray-500 text-lg">/Month</span>
            </p>
          </div>
          <ul className="text-gray-500">
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Everything in Pro
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Team collaboration
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Custom integrations
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Dedicated support
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              SLA guarantee
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark color="#30B868" />
              Custom branding
            </li>
          </ul>
          <button className="p-bg btn rounded-full text-white mt-auto">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}
