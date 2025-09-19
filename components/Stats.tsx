"use client";

import React from "react";
import Image from "next/image";
import { FaUnity, FaGithub, FaGamepad } from "react-icons/fa";

export default function Stats() {
  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 text-white w-full max-w-md shadow-inner">
      <div className="relative flex items-center justify-center w-full h-64">
        {/* Wavy Circle using Path */}
        <svg viewBox="0 0 200 200" className="relative w-60 h-60">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Uneven wave shapes */}
          <path
            d="M100,40 
              C130,30 170,60 160,100 
              C150,140 110,170 80,160 
              C40,150 30,110 50,70 
              C70,50 90,50 100,40Z"
            stroke="url(#waveGradient)"
            strokeWidth="20"
            fill="#3b82f6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M100,30 
              C150,40 170,70 150,110 
              C140,150 90,170 60,140 
              C30,120 40,70 70,50 
              C90,40 110,40 100,30Z"
            stroke="url(#waveGradient)"
            strokeWidth="16"
            fill="#8b5cf6"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 100 100"
              to="0 100 100"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>

          {/* Translucent background circle above waves */}
          <circle cx="100" cy="100" r="55" fill="rgba(26, 26, 26, 0.7)" />
        </svg>

        {/* Centered Text */}
        <div className="absolute text-center">
          {/* <p className="text-xs uppercase text-zinc-200">Total hours</p>
          <h2 className="text-3xl font-bold">12,340h</h2> */}
           <FaGamepad className="text-purple-400 text-8xl mb-2" />
        </div>
      </div>

      {/* Individual Game Stats with Icons */}
      <div className="flex justify-around items-center gap-6 text-center mt-6">
        <div className="flex flex-col items-center">
          <FaUnity className="text-red-400 text-2xl mb-1" />
          <p className="text-sm font-medium text-red-400">Unity</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/unrealeng.svg" alt="Unreal Logo" width={32} height={32} />
          <p className="text-sm font-medium text-blue-400">Unreal</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGithub className="text-purple-400 text-2xl mb-1" />
          <p className="text-sm font-medium text-purple-400">GitHub</p>
        </div>
      </div>
    </div>
  );
}
