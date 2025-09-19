import React from "react";

export default function TopHeader({ image, collegeName, stream }) {
  return (
    <div className="w-full max-w-md flex items-center px-4 py-3 rounded-2xl bg-black bg-opacity-40 text-white shadow-lg">
      {/* Circle wrapper */}
      <div className="w-14 aspect-square mr-3 rounded-full border border-white/20 bg-white/10 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt="College Logo"
          className="w-3/4 h-3/4 object-contain"
        />
      </div>

      {/* Text */}
      <div>
        <h1 className="text-xl font-semibold">{stream}</h1>
        <p className="text-xs text-white/80">{collegeName}</p>
      </div>
    </div>
  );
}
