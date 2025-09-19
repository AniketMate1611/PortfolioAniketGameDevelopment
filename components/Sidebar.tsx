"use client";

import { Home, FolderKanban, User, Mail, Menu, X, ToolCase, Computer, Laptop2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const sections = ["projects", "skills", "education", "stats"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = activeSection;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
       if (scrollY < 50) {
        current= "home";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const sidebarWidth = isMobile
    ? isOpen
      ? "w-64"
      : "w-0"
    : isHovered
    ? "w-64"
    : "w-16";

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 bg-cyan-600 p-2 rounded-lg text-white shadow-lg md:hidden pr-4"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {(isMobile && isOpen) || !isMobile ? (
        <aside
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          className={clsx(
            "fixed top-4 left-4 z-40 h-[calc(100vh-2rem)] bg-darkBg text-white shadow-lg rounded-2xl p-4 overflow-hidden transition-all duration-300",
            sidebarWidth
          )}
        >
          <nav className="space-y-4">
            <SidebarLink
              targetId="home"
              icon={<Home size={20} />}
              label="Home"
              isVisible={isMobile ? isOpen : isHovered}
              isActive={activeSection === "home"}
            setActiveSection={setActiveSection}
            />
            <SidebarLink
            targetId="projects"
            icon={<FolderKanban size={20} />}
            label="Projects"
            isVisible={isMobile ? isOpen : isHovered}
            isActive={activeSection === "projects"}
            setActiveSection={setActiveSection} // you can add logic to highlight based on scroll
            />
            <SidebarLink
              targetId="skills"
              icon={<User size={20} />}
              label="Tools and Languages"
              isVisible={isMobile ? isOpen : isHovered}
              isActive={activeSection === "skills"}
              setActiveSection={setActiveSection}
            />
          </nav>
        </aside>
      ) : null}
    </>
  );
}

type SidebarLinkProps = {
  targetId: string;  // 👈 now using section ID
  icon: React.ReactNode;
  label: string;
  isVisible: boolean;
  isActive: boolean;
  setActiveSection: (id: string) => void;
};

function SidebarLink({ targetId, icon, label, isVisible, isActive, setActiveSection, }: SidebarLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
       setActiveSection(targetId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex items-center space-x-3 px-2 py-2 rounded-lg transition-all w-full text-left",
        "hover:bg-pink-600",
        isActive && "text-pink-400"
      )}
    >
      <span
        className={clsx(
          "flex items-center justify-center transition-all duration-300",
          isActive &&
            "text-pink-400 animate-pulse drop-shadow-[0_0_6px_rgba(244,114,182,0.8)]",
          !isVisible && "mx-auto"
        )}
      >
        {icon}
      </span>

      <span
        className={clsx(
          "whitespace-nowrap transition-all duration-200",
          isVisible ? "opacity-100 ml-2" : "opacity-0 ml-0 w-0 overflow-hidden"
        )}
      >
        {label}
      </span>
    </button>
  );
}

