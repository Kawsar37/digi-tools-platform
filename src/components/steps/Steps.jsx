import React from "react";
import userIcon from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";
import StepCard from "./StepCard";

const stepCardInfo = [
  {
    id: 1,
    icon: userIcon,
    type: "Create Account",
    text: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: 2,
    icon: packageIcon,
    type: "Choose Products",
    text: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: 3,
    icon: rocketIcon,
    type: "Start Creating",
    text: "Download and start using your premium tools immediately.",
  },
];

export default function Steps() {
  return (
    <div className="text-center bg-[#F9FAFC]">
      <div className="container my-10! md:my-20! pb-20">
        <h2 className="font-semibold text-4xl mb-4">Get Started in 3 Steps</h2>
        <p className="text-[#627382] mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {stepCardInfo.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}
