"use client";

import { FaPlayCircle } from "react-icons/fa";
import React, { useState } from "react";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  video: string;
}

export default function GameCard({
  title,
  description,
  image,
  video,
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[300px] flex-shrink-0 aspect-square bg-zinc-800 rounded-2xl group shadow-md hover:shadow-pink-500 transition duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl flex items-center justify-center bg-black">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className={`max-w-full max-h-full transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          } object-contain`}
        />
        {/* Video */}
        {isHovered && (
          <video
            src={video}
            autoPlay
            muted
            loop
            className="absolute max-w-full max-h-full object-contain"
          />
        )}
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 w-full bg-zinc-900/70 backdrop-blur p-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <a href={video} target="_blank" rel="noopener noreferrer">
            <FaPlayCircle className="text-pink-400 hover:text-pink-500 text-lg cursor-pointer transition" />
          </a>
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
