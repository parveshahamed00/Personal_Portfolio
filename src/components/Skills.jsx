import React from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaAngular, 
  FaNodeJs, 
  FaDatabase,
  FaJava, 
  FaPython
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiNextdotjs, 
  SiMysql, 
  SiMongodb,
  SiCplusplus,
  SiTypescript,
  SiJavascript
} from "react-icons/si";

const Skills = ({ bgColor, skillsRef }) => {
  const skills = [
    { 
      name: "HTML", 
      icon: <FaHtml5 className="text-5xl text-orange-600" />, 
      color: "bg-gradient-to-br from-orange-200 to-orange-300" 
    },
    { 
      name: "CSS", 
      icon: <FaCss3Alt className="text-5xl text-blue-600" />, 
      color: "bg-gradient-to-br from-blue-200 to-blue-300" 
    },
    { 
      name: "Bootstrap", 
      icon: <FaBootstrap className="text-5xl text-purple-600" />, 
      color: "bg-gradient-to-br from-purple-200 to-purple-300" 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss className="text-5xl text-cyan-500" />, 
      color: "bg-gradient-to-br from-cyan-200 to-cyan-300" 
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="text-5xl text-yellow-500" />, 
      color: "bg-gradient-to-br from-yellow-200 to-yellow-300" 
    },
    { 
      name: "ReactJS", 
      icon: <FaReact className="text-5xl text-cyan-400" />, 
      color: "bg-gradient-to-br from-cyan-200 to-cyan-300" 
    },
    { 
      name: "Angular", 
      icon: <FaAngular className="text-5xl text-red-600" />, 
      color: "bg-gradient-to-br from-red-200 to-red-300" 
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs className="text-5xl text-green-600" />, 
      color: "bg-gradient-to-br from-green-200 to-green-300" 
    },
    { 
      name: "Express.js", 
      icon: <SiExpress className="text-5xl text-gray-800" />, 
      color: "bg-gradient-to-br from-gray-200 to-gray-300" 
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs className="text-5xl text-black" />, 
      color: "bg-gradient-to-br from-gray-200 to-gray-300" 
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-5xl text-blue-700" />, 
      color: "bg-gradient-to-br from-blue-200 to-blue-300" 
    },
    { 
      name: "C++", 
      icon: <SiCplusplus className="text-5xl text-purple-700" />, 
      color: "bg-gradient-to-br from-purple-200 to-purple-300" 
    },
    { 
      name: "Python", 
      icon: <FaPython className="text-5xl text-blue-600" />, 
      color: "bg-gradient-to-br from-blue-200 to-yellow-200" 
    },
    { 
      name: "Java", 
      icon: <FaJava className="text-5xl text-red-700" />, 
      color: "bg-gradient-to-br from-red-200 to-orange-200" 
    },
    { 
      name: "MySQL", 
      icon: <SiMysql className="text-5xl text-blue-700" />, 
      color: "bg-gradient-to-br from-blue-200 to-blue-300" 
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-5xl text-green-500" />, 
      color: "bg-gradient-to-br from-green-200 to-green-300" 
    },
  ];

  return (
    <section ref={skillsRef} className={`py-12 ${bgColor || "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#161179]">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl shadow-md ${skill.color} hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-2 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill.icon}
              <span className="mt-3 text-xl font-bold text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;