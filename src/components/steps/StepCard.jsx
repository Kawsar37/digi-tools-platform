import React from "react";

export default function StepCard({ step }) {
  console.log("step-card");
  const { id, icon, type, text } = step;
  return (
    <div className="flex flex-col items-center max-w-90 bg-white ring-1 ring-gray-300/50 rounded-xl p-6 gap-6 relative">
      <p className="h-10 w-10 flex items-center justify-center rounded-full p-bg self-baseline-last absolute top-3 right-3">
        {id}
      </p>
      <div className="h-25 w-25 rounded-full bg-[#F3E8FE] flex items-center justify-center">
        <img src={icon} />
      </div>
      <h3 className="font-semibold text-2xl">{type}</h3>
      <p className="text-gray-500">{text}</p>
    </div>
  );
}
