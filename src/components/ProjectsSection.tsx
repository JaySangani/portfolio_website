"use client";
import { projectsData } from "@/data/projectsData";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const topProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="mt-24 mb-24 w-full flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Projects & Achievements
      </motion.h2>
      <div className="flex flex-col gap-8 max-w-5xl w-full">
        {topProjects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white/10 p-8 shadow-2xl border border-blue-900/20 backdrop-blur-2xl w-full"
          >
            <h3 className="text-xl font-bold mb-1 text-blue-200">{project.title}</h3>
            <a
              href={project.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 underline mb-2 inline-block"
            >
              {project.org}
            </a>
            <p className="mb-4 text-slate-200">{project.description}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-900/60 text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
