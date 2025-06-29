import { projectsData } from "@/data/projectsData";
import Link from "next/link";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <div className="text-center text-red-400 mt-10">Project not found</div>;
  }

  // Calculate next project (loops back to first)
  const nextIndex = (projectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <main className="min-h-screen flex flex-col items-center py-16 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
        {project.title}
      </h1>
      <a
        href={project.orgUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mb-2"
      >
        {project.org}
      </a>
      <p className="mb-6 text-slate-200">{project.description}</p>
      <div className="flex flex-wrap gap-3 mb-8">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-blue-900/60 text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Next arrow */}
      <Link
        href={`/projects/${nextProject.slug}`}
        className="flex items-center gap-2 mt-8 text-cyan-400 hover:underline text-lg font-bold transition-all duration-200 group"
      >
        Next Project
        <svg
          className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </main>
  );
}
