"use client";

import React, { useRef,useState,useEffect } from "react";
import IntroHeader from "../components/IntroHeader";
import TopHeader from "../components/TopHeader";
import Stats from "../components/Stats";
import FeaturedCard from "../components/FeaturedCard";
import GameCard from "../components/GameCard";
import Contact from "../components/Contact";
import { FaAppStore, FaChevronLeft, FaChevronRight,FaFolderOpen } from "react-icons/fa";
import "./globals.css";
import LanguagesAndSoftware from "../components/About";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    );
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 300 + 12; // 300px card width + ~12px gap
    const amount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition(); // initial check

    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    
    <div  className="px-4 md:px-8 py-6 pr-4">
      <IntroHeader />
      {/* Outer container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left side (2/3 width on large screens) */}
        <div id="home" className="lg:col-span-2 pr-4">
          <FeaturedCard
            title="Aniket Mate"
            image="/Control.png"
            description="I'm a passionate game developer with a focus on immersive worlds and physics-based interactions. Skilled in Unity, C#, and 3D asset workflows. Currently pursuing MSc in Game Technology."
          />

          {/* Game cards scrollable row */}
          <div className="mt-6 relative pr-8">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
              Projects
               <FaFolderOpen className="text-orange-400 text-4xl" />
            </h2>
            {/* Arrows */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={() => scroll("left")}
                className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>
            </div>

            <div id="projects"
              ref={scrollRef}
              className="flex overflow-x-auto gap-3 scrollbar-hide scroll-smooth pl-10 pr-10"
            >
              <GameCard
                title="RiskBound"
                description="Hack and Slash with Risk Factor"
                 image="/RiskBoundThumbnail.png"
                video="/RiskBoundVideo.mp4"
              />
              <GameCard
                title="Poppit"
                description="HyperCasual Balloon Pop Game"
                image="/PoppitThumbnail.jpg"
                video="/PoppitVideo.mp4"
              />
                <GameCard
                title="Chosen"
                description="Physics-based Parkour SpeedRunner."
                image="/parkour-game.png"
                video="/Level1.mp4"
              />
              <GameCard
                title="Aim Tester"
                description="Click and Destroy Web Game."
                image="/webgame.png"
                video="/vid1.mp4"
              />

              {/* You can add more <GameCard />s here */}
            </div>
        

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={() => scroll("right")}
                className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
              >
                <FaChevronRight />
              </button>
            </div>
            
          </div>
          <div id="skills">
            <LanguagesAndSoftware />
          </div>
               
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
              <div className="space-y-4 p-6">
      <TopHeader
        image="/science.png"
        stream="General Science"
        collegeName="Higher Secondary College"
        
      />

      <TopHeader
        image="/3d-modeling.png"
        stream="Bachelor of Computer Applications"
        collegeName="Mohota Science College"
      />

      <TopHeader
        image="/game.png"
        stream="Master of Science in Game Technology"
        collegeName="ICAT Design and Media College"

      />
      <Stats  />
      <Contact />
    </div>
                    
        </div>
      </div>
    </div>
  );
}
