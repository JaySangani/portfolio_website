// src/app/page.tsx

"use client";

import { useState, useRef } from "react";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [showEmail, setShowEmail] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "jaysangani04@gmail.com";
  const popupTimer = useRef<NodeJS.Timeout | null>(null);

  // Contact popup logic
  const handleContactClick = () => {
    setShowEmail(true);
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    if (popupTimer.current) clearTimeout(popupTimer.current);
    popupTimer.current = setTimeout(() => setShowEmail(false), 5000);
    setTimeout(() => setEmailCopied(false), 1200);
  };
  const handleEmailPopupClick = () => {
    window.open(`mailto:${email}`, "_blank");
    setShowEmail(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white flex flex-col items-center justify-center px-4">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col items-center mt-16 mb-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-3">
          Hi, I&apos;m Jay Sangani
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-5 text-center max-w-2xl">
          Business Analytics Graduate | Data Enthusiast
        </p>
        <div className="flex gap-4">
          {/* Resume Button */}
          <a
            href="/Jay_Sangani_Resume.pdf"
            download="Jay_Sangani_Resume.pdf"
            className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:from-slate-500 hover:to-blue-500 hover:scale-105 will-change-transform hover:shadow-blue-400/40 flex items-center justify-center"
          >
            Download Resume
          </a>
          {/* Contact Button + Popup */}
          <div className="relative flex items-center">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:from-slate-500 hover:to-blue-500 hover:scale-105 will-change-transform hover:shadow-blue-400/40 flex items-center justify-center"
            >
              <span className="transition-colors duration-200">Contact Me</span>
            </button>
            {showEmail && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-slate-800 text-white px-6 py-4 rounded-xl shadow-xl z-50 cursor-pointer animate-fadeIn w-max"
                onClick={handleEmailPopupClick}
              >
                <span className="font-mono">{email}</span>
                <div className="mt-1 text-green-400 text-xs font-bold">
                  {emailCopied ? "Copied!" : "Click again to email"}
                </div>
              </div>
            )}
          </div>
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/sangani-jay/"
            target="_blank"
            className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:from-slate-500 hover:to-blue-500 hover:scale-105 hover:shadow-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center"
          >
            LinkedIn
          </a>
        </div>
        <style>
          {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .animate-fadeIn {
        animation: fadeIn 0.4s;
      }
    `}
        </style>
      </motion.section>

      {/* ABOUT ME SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col items-center mt-20 mb-16"
      >
        {/* Big Profile Image */}
        <Image
          src="/jay_avatar.jpg"
          alt="Jay Sangani"
          width={240} // or whatever size you want
          height={240}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-blue-400 shadow-4xl -mt-22"
          style={{ background: "#1e293b" }}
          priority // optional: for fast loading
        />

        {/* Below the photo section / summary */}
        <div className="flex flex-col items-center mt-4">
          {/* Tagline / Roles */}
          <div className="text-lg md:text-xl font-semibold text-blue-200 mb-2">
            Business Analyst 👨🏻‍💻 | Data Storyteller 📊 | Monash University Alum
            🎓
          </div>
          {/* 3-Line Summary */}
          <div className="text-base md:text-lg text-slate-300 text-center max-w-2xl mb-2">
            <span className="font-bold text-white">Passionate</span> about
            translating complex data into actionable business insights.{" "}
            <span className="font-bold text-white">Experienced</span> in
            analytics, automation, and stakeholder engagement.{" "}
            <span className="font-bold text-white">Always</span> seeking new
            challenges to make a real-world impact.
          </div>
        </div>
        {/* Fun line */}
        <div className="mt-2 text-sm italic text-cyan-400 text-center">
          Swimming 🏊‍♂️ • Cricket 🏏 • Gaming 🎮
        </div>
      </motion.section>

      {/* PROJECTS & SKILLS */}
      <ProjectsSection />
      <Skills />
    </main>
  );
}
