"use client";

import Image from "next/image";
import { 
  FaUnity, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare,FaLanguage,FaWindows
} from "react-icons/fa";
import {  
  SiBlender, SiAutodeskmaya, SiAdobephotoshop, SiGithub 
} from "react-icons/si";

export default function SkillsSection() {
  const skillCard = (Icon, label, color) => (
    <div className="flex flex-col items-center ">
      <div
        className={`
          relative flex items-center justify-center 
          w-20 h-20 rounded-full 
          bg-white/3 backdrop-blur-md shadow-inner
          transition-all duration-300 
          hover:scale-110 hover:shadow-[0_0_20px_${color}]
        `}
      >
        <Icon size={40} className={color} />
        
        {/* Aura glow with pulsing animation */}
        <span
          className={`
            absolute inset-0 rounded-full blur-xl opacity-40 
            ${color.replace("text-", "bg-")} 
            animate-pulse-glow
          `}
        ></span>
      </div>
      <p className="mt-3">{label}</p>
    </div>
  );

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Languages */}
      <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
  Languages
   <FaLanguage className="text-purple-400 text-4xl" />
</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
         {skillCard(() => <Image src="/CLang.svg" alt="CLogo" width={50} height={50} />, "C", "text-purple-500")}
        {skillCard(() => <Image src="/cSharps.svg" alt="cpplogo" width={50} height={50} />, "C++", "text-purple-500")}
        {skillCard(() => <Image src="/cSharpFinal.svg" alt="CSLogo" width={50} height={50} />, "C#", "text-purple-500")}
        {skillCard(FaJava, "Java", "text-red-500")}
        {skillCard(FaHtml5, "HTML", "text-orange-500")}
        {skillCard(FaCss3Alt, "CSS", "text-blue-500")}
        {skillCard(FaJsSquare, "JavaScript", "text-yellow-400")}
      </div>

      {/* Software */}
       <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
  Softwares & Tools
   <FaWindows className="text-blue-400 text-2xl" />
</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
        {skillCard(FaUnity, "Unity", "text-gray-400")}
        {skillCard(() =>  <Image src="/unrealeng.svg" alt="Unreal Logo" width={50} height={50} />, "Unreal Engine", "text-blue-600")}
        {skillCard(SiAutodeskmaya, "Maya", "text-sky-400")}
        {skillCard(() =>  <Image src="/sPainter.svg" alt="Unreal Logo" width={50} height={50} />, "Substance Painter", "text-red-500")}
        {skillCard(SiAdobephotoshop, "Photoshop", "text-blue-500")}
        {skillCard(SiGithub, "GitHub", "text-white-500")}

      </div>
    </section>
  );
}
