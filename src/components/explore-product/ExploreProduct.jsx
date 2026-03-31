import React from "react";

export default function ExploreProduct() {
  return (
    <div className="p-bg text-center py-20 sm:py-25">
      <div className="container">
        <h2 className="font-semibold text-4xl text-white mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-white">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
        <div className="mt-10">
          <button className="btn rounded-full bg-white mt-auto mr-4">
            <p className="p-bg bg-clip-text text-transparent p-bg">
              Explore Product
            </p>
          </button>
          <button className="btn btn-ghost btn-primary border border-white rounded-full text-white">
            View Pricing
          </button>
          <p className="text-white mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}
