"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fine Default Prediction Model",
    org: "Department of Government Services",
    orgUrl: "#", // Add your real link if you want!
    description:
      "Built a machine learning model in Python to predict fine defaults, improving detection by 15%. Created Power BI dashboards for stakeholder reporting.",
    tech: ["Python", "Power BI", "Machine Learning"],
  },
  {
    title: "Water Availability Forecasting",
    org: "Monash University",
    orgUrl: "#",
    description:
      "Forecasted regional water availability using large-scale environmental datasets and statistical models in Python.",
    tech: ["Python", "Statistical Modeling"],
  },
  {
    title: "Event Management Lead",
    org: "G.H. Raisoni University",
    orgUrl: "#",
    description:
      "Led planning and execution of university events. Managed a budget, improved engagement, and saved 18% in costs.",
    tech: ["Leadership", "Event Management"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mt-24 mb-24 w-full flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Projects & Achievements
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="rounded-2xl bg-white/10 p-8 shadow-2xl border border-blue-900/20 backdrop-blur-2xl hover:scale-[1.03] hover:shadow-blue-600/30 hover:shadow-2xl transition-transform duration-200"
          >
            <h3 className="text-xl font-bold mb-1 text-blue-200">
              {project.title}
            </h3>
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
            {/* Optional: View Details button for future links */}
            {/* <a
              href={project.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              View Details
            </a> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
