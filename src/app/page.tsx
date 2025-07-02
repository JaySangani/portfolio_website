"use client";

import { useEffect, useRef, useState } from "react";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  // Email popup state (unchanged)
  const [showEmail, setShowEmail] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "jaysangani04@gmail.com";
  const popupTimer = useRef<NodeJS.Timeout | null>(null);

  // --- CURSOR-FOLLOWING GRADIENT BORDER LOGIC ---
  const containerRef = useRef<HTMLDivElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const radius = 45;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      setGradientPos({ x, y });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Contact popup logic (unchanged)
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
      <section className="w-full flex flex-col items-center mt-16 mb-10">
        {/* ANIMATED GRADIENT HEADING (optional) */}
        <motion.h1
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-3 bg-[length:200%_200%]"
        >
          Hi, I&apos;m Jay Sangani
        </motion.h1>
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
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="w-full flex flex-col items-center mt-20 mb-16"
      >
        {/* --- Profile Photo with ALWAYS-ON Gradient Border --- */}
        <motion.div
          ref={containerRef}
          className="relative w-38 h-38 md:w-58 md:h-58 flex items-center justify-center rounded-full cursor-pointer"
        >
          {/* Always-visible thin gradient border */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #67e8f9 25%, #8b5cf6 60%)`,
              zIndex: 1,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          />
          {/* Actual photo */}
          <Image
            src="/jay_avatar.jpg"
            alt="Jay Sangani"
            width={144}
            height={144}
            className="relative w-36 h-36 md:w-56 md:h-56 rounded-full object-cover border-2 border-slate-800 z-10"
            style={{ background: "#1e293b" }}
            priority
          />
        </motion.div>

        {/* Below the photo section / summary */}
        <div className="flex flex-col items-center mt-4">
          {/* Tagline / Roles */}
          <div className="text-lg md:text-xl font-semibold text-blue-200 mb-2">
            Business Analyst 👨🏻‍💻 | Data Storyteller 📊 | Monash University Alum 🎓
          </div>
          {/* 3-Line Summary */}
          <div className="text-base md:text-lg text-slate-300 text-center max-w-2xl mb-2">
            <span className="font-bold text-white">Passionate</span> about
            translating complex data into actionable business insights.{" "}
            <span className="font-bold text-white">Experienced</span> in
            analytics, automation, and stakeholder engagement.
            <br />
            <span className="font-bold text-white">Always</span> seeking new
            challenges to make a real-world impact.
          </div>
        </div>
        {/* Fun line */}
        <div className="mt-2 text-sm italic text-cyan-400 text-center">
          Swimming 🏊‍♂️ • Cricket 🏏 • Gaming 🎮
        </div>
      </section>

      {/* PROJECTS & SKILLS */}
      <ProjectsSection />

      {/* SEE ALL PROJECTS BUTTON */}
      <div className="flex justify-center mt-6 mb-4">
        <Link
          href="/projects"
          className="group inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
            text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_2px_24px_0_rgba(139,92,246,0.18)]"
        >
          See all projects
          <span className="inline-block transition-transform duration-200 ml-2 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <Skills />
    </main>
  );
}
