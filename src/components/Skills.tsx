"use client";
import {
  SiPython,
  SiTableau,
  SiR,
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill, PiFileSqlBold } from "react-icons/pi";

const skills = [
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "SQL", icon: PiFileSqlBold, color: "text-blue-400" },
  { name: "Power BI", icon: FaChartBar, color: "text-yellow-500" },
  { name: "Tableau", icon: SiTableau, color: "text-orange-400" },
  { name: "Excel", icon: PiMicrosoftExcelLogoFill, color: "text-green-500" },
  { name: "R", icon: SiR, color: "text-sky-400" },
];

export default function Skills() {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      id="skills"
      className="mt-24 w-full flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-14 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-16 max-w-4xl w-full mx-auto justify-items-center">
        {skills.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center group transition duration-200 cursor-pointer"
          >
            <Icon
              className={`
                text-7xl md:text-8xl mb-4 ${color}
                transition duration-200
                group-hover:scale-110
              `}
            />
            <span className="mt-1 text-slate-200 font-medium text-lg">{name}</span>
          </div>
        ))}
      </div>

      {/* Gap at bottom */}
      <div className="h-32" />

      {/* Back to Top button */}
      <button
        onClick={handleScrollTop}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition"
      >
        ↑ Back to Top
      </button>
    </section>
  );
}
