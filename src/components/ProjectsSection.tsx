import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function ProjectsSection() {
  const topProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="mt-24 mb-24 w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        Projects & Achievements
      </h2>
      <div className="flex flex-col gap-8 max-w-4xl w-full">
        {topProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block"
            prefetch={false}
          >
            <div
              className="
                rounded-2xl bg-white/10 p-8 shadow-2xl border border-blue-900/20 backdrop-blur-2xl w-full
                transition-all duration-300 ease-in-out
                hover:scale-105
                hover:shadow-[0_0_24px_8px_rgba(34,197,243,0.25),0_2px_16px_2px_rgba(139,92,246,0.20)]
                cursor-pointer
              "
            >
              <h3 className="text-xl font-bold mb-1 text-blue-200">{project.title}</h3>
              <span
                onClick={e => {
                  e.stopPropagation();
                  window.open(project.orgUrl, "_blank");
                }}
                className="text-sm text-blue-400 underline mb-2 inline-block cursor-pointer"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter") window.open(project.orgUrl, "_blank");
                }}
              >
                {project.org}
              </span>
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
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
