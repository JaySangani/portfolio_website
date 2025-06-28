"use client";

import Skills from "@/components/Skills";

import Projects from "@/components/Projects";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white flex flex-col items-center justify-center px-4">
      {/* HERO SECTION (add here if you have one) */}

      {/* ABOUT ME SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-2xl bg-white/5 rounded-2xl shadow-xl mt-24 p-8 backdrop-blur-md"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-slate-200 leading-relaxed">
          I’m Jay Sangani, a Business Analytics graduate from Monash
          University...
        </p>
      </motion.section>

      {/* PROJECTS SECTION - just add this line below About Me */}
      <Projects />
      <Skills />
    </main>
  );
}
