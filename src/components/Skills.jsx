import React from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaAngular, 
  FaNodeJs, 
  FaDatabase 
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiNextdotjs, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

const Skills = ({ bgColor, skillsRef }) => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-600" />, color: "bg-orange-100" },
    { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-600" />, color: "bg-blue-100" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-purple-600" />, color: "bg-purple-100" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" />, color: "bg-cyan-100" },
    { name: "ReactJS", icon: <FaReact className="text-4xl text-cyan-400" />, color: "bg-cyan-100" },
    { name: "Angular", icon: <FaAngular className="text-4xl text-red-600" />, color: "bg-red-100" },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" />, color: "bg-green-100" },
    { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-800" />, color: "bg-gray-100" },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" />, color: "bg-gray-100" },
    { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-700" />, color: "bg-blue-100" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-500" />, color: "bg-blue-100" },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" />, color: "bg-green-100" },
  ];

  return (
    <section ref={skillsRef} className={`py-12 ${bgColor || "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#161179]">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl shadow-lg ${skill.color} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
            >
              {skill.icon}
              <span className="mt-3 text-lg font-semibold text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;