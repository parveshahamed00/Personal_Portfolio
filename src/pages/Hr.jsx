import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import { FaDownload, FaGraduationCap, FaSchool } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

// Education Component
const Education = ({ educationRef }) => {
  const educationData = [
    {
      institution: "Sadakathullah Appa College",
      degree: "MSc in Computer Science",
      duration: "2023 – 2025",
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
    },
    {
      institution: "Sadakathullah Appa College",
      degree: "BSc in Information Technology",
      duration: "2020 – 2023",
      icon: <SiBookstack className="text-3xl text-green-600" />,
    },
    {
      institution: "Bell Matric Hr. Sec. School",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2018 – 2020",
      icon: <FaSchool className="text-3xl text-purple-600" />,
    },
  ];

  return (
    <section ref={educationRef} className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#161179]">
          My Education
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#161179] h-full"></div>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-5/12 p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                  index % 2 === 0 ? "ml-8" : "mr-8"
                }`}
              >
                <div className="flex items-center mb-2">
                  {edu.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-800">{edu.degree}</h3>
                </div>
                <p className="text-gray-600 font-medium">{edu.institution}</p>
                <p className="text-gray-500">{edu.duration}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#161179] rounded-full border-4 border-white z-10"></div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function Hr() {
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

 

  const scrollToAchievements = () => {
    if (achievementsRef.current) {
      achievementsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

 

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [open, setOpen] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  const downloadAndOpenFile = () => {
    const fileUrl = "/WebDeveloper_Parvesh.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "WebDeveloper_Parvesh.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    window.open(fileUrl, "_blank");
  };

  const accordionItems = [
    {
      id: 1,
      title: "Technical Expertise",
      content: [
        "Proficient in modern JavaScript frameworks like React, Angular and Next.js",
        "Skilled in building RESTful APIs with Node.js and Express",
        "Experience with databases like MongoDB, Mysql and PostgreSQL",
      ],
    },
    {
      id: 2,
      title: "Problem Solving",
      content: [
        "Adept at breaking down complex problems into actionable solutions",
        "Strong debugging and optimization skills",
        "Comfortable working under pressure to meet deadlines",
      ],
    },
    {
      id: 3,
      title: "Team Collaboration",
      content: [
        "Effective communication skills with cross-functional teams",
        "Experience in Agile and Scrum methodologies",
        "Proven track record of delivering collaborative projects",
      ],
    },
    {
      id: 4,
      title: "Continuous Learning",
      content: [
        "Passionate about exploring new technologies and trends",
        "Regular contributor to open-source projects",
        "Committed to personal and professional growth",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Navbar
        bgColor="bg-[#161179]"
        navLogoColor="text-white"
        textColor="text-gray-400"
        textHover="hover:text-white"
        btnBgColor="bg-white"
        btnTextColor="text-blue-600"
        btnHoverColor="hover:bg-blue-700 hover:text-white"
        scrollToSkills={scrollToSkills}
        scrollToAchievements={scrollToAchievements}
        scrollToContact={scrollToContact}
      />
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between min-h-[90vh] pt-20">
        <div className="flex justify-center m-0 sm:order-2">
          <img
            src="/images/profilPic-Hr.png"
            alt="Profile"
            className="sm:w-72 w-60 object-cover rounded-full shadow-2xl"
          />
        </div>
        <div className="text-center max-w-xl mx-auto sm:order-1">
          <h1 style={{ lineHeight: "1.3" }} className="text-4xl md:text-5xl font-bold">
            I am <span className="text-[#161179]">Parvesh Ahamed</span> thank you for visiting my profile
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            Fullstack Developer. AI Enthusiast. UI Engineer.
          </p>
          <button
            onClick={downloadAndOpenFile}
            className="border border-black text-black bg-transparent px-6 mt-5 py-2 rounded-md hover:bg-black hover:text-white transition"
          >
            <span className="flex items-center">
              Download Resume <FaDownload className="ml-2" />
            </span>
          </button>
        </div>
      </section>
      {/* About Me */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <section className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#161179]">
            About Me
          </h1>
          <p className="mb-3 text-gray-700 leading-relaxed">
            I am Parvesh Ahamed, a Fullstack Developer passionate about building scalable and efficient web applications. I completed my Master's in Computer Science from Sadakathullah Appa College.
          </p>
          <p className="mb-3 text-gray-700 leading-relaxed">
            My expertise includes JavaScript, React, Angular, Node.js, MongoDB, and modern frontend frameworks. I have hands-on experience with building real-world applications and solving complex problems.
          </p>
          <p className="mb-3 text-gray-700 leading-relaxed">
            I have earned multiple certifications and participated in various hackathons and tech competitions, constantly honing my skills.
          </p>
        </section>
      </div>
      {/* Why Me */}
      <section className="px-4 py-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#161179]">
          Why You Should Hire Me
        </h2>
        <div className="space-y-4">
          {accordionItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => handleOpen(item.id)}
                className="flex items-center justify-between w-full p-4 text-left text-gray-500 font-medium hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
              >
                <span>{item.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`h-5 w-5 transition-transform ${open === item.id ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-white">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {item.content.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Education */}
      <Education educationRef={educationRef} />
      {/* Skills */}
      <Skills skillsRef={skillsRef} bgColor="bg-gray-50" />
      {/* Achievements */}
      {/* <Achievements achievementsRef={achievementsRef} /> */}
      <Achievements achievementsRef={achievementsRef}/>
      {/* Projects */}
      {/* <Projects projectsRef={projectsRef} /> */}
      <Contact contactRef={contactRef} downloadResume={downloadAndOpenFile}/>
      {/* Contact */}
    </div>
  );
}

export default Hr;