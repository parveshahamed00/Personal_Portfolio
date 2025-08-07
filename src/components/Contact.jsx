import React from "react";
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

const Contact = ({ downloadResume,contactRef }) => {
  const contactDetails = [
    {
      icon: <FaPhone className="text-3xl text-white group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-300" />,
      label: "Phone",
      value: "+91 8870213057",
      href: "tel:+918870213057",
    },
    {
      icon: <FaLinkedin className="text-3xl text-white group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-300" />,
      label: "LinkedIn",
      value: "parvesh-ahamed",
      href: "https://www.linkedin.com/in/parvesh-ahamed/",
    },
    {
      icon: <FaGithub className="text-3xl text-white group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-300" />,
      label: "GitHub",
      value: "parveshahamed00",
      href: "https://github.com/parveshahamed00",
    },
    {
      icon: <FaEnvelope className="text-3xl text-white group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-300" />,
      label: "Email",
      value: "parveshahamed00@gmail.com",
      href: "mailto:parveshahamed00@gmail.com",
    },
  ];



  return (
    <section ref={contactRef} className="py-16 bg-[#161179]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fade-in">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.label !== "Phone" && item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Phone" && item.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center p-4 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {item.icon}
              <div className="ml-4">
                <p className="text-lg font-semibold text-white">{item.label}</p>
                <p className="text-sm text-gray-200">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={downloadResume}
            className="border border-white text-white bg-transparent px-6 py-2 rounded-md hover:bg-white hover:text-[#161179] transition-all duration-300 flex items-center animate-fade-in"
            style={{ animationDelay: `${contactDetails.length * 200}ms` }}
          >
            Download Resume <FaDownload className="ml-2" />
          </button>
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

export default Contact;