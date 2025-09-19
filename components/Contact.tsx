"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-darkBg text-white  rounded-2xl">
      <div className="max-w-4xl mx-auto text-center  rounded-2xl" >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>

        <p className="text-lg mb-10 text-gray-300">
          Feel free to reach out to me via email or connect with me on my socials 🚀
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center  rounded-2xl">
          {/* Email */}
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amate647@gmail.com&su=Hello%20Aniket&body=I%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 transition w-20 h-20 rounded-full shadow-lg group"
            >
            <FaEnvelope size={28} />
            <span className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 text-sm bg-black text-white px-2 py-1 rounded-md transition">
              Email
            </span>
          </a>

          {/* Resume */}
          <a
            href="/AniketResume.pdf"
            download
            className="relative flex items-center justify-center bg-pink-600 hover:bg-pink-700 transition w-20 h-20 rounded-full shadow-lg group"
          >
            <FaFileAlt size={28} />
            <span className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 text-sm bg-black text-white px-2 py-1 rounded-md transition">
              Resume
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aniket-mate-30ba09282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition w-20 h-20 rounded-full shadow-lg group"
          >
            <FaLinkedin size={28} />
            <span className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 text-sm bg-black text-white px-2 py-1 rounded-md transition">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AniketMate1611"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center bg-gray-700 hover:bg-gray-800 transition w-20 h-20 rounded-full shadow-lg group"
          >
            <FaGithub size={28} />
            <span className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 text-sm bg-black text-white px-2 py-1 rounded-md transition">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
