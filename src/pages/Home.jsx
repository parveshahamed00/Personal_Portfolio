import { FaUserTie, FaCode, FaUserSecret } from "react-icons/fa";
import RoleBtn from "../components/RoleBtn";
import TypewriterText from "../components/TypewriterText";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center text-white px-4 w-full">
      {/* Headings */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-snug">
      
       Hi, I’m <span className="text-blue-500">Parvesh Ahamed</span>
        <br />
        <TypewriterText></TypewriterText>
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-300 mb-4 text-center w-full">
        Explore Based on Your Role
      </h2>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-screen-sm">
        <RoleBtn
          icon={<FaUserTie className="text-xl animate-pulse" />}
          label="HR / Recruiter"
          path="/hr"
        />
        <RoleBtn
          icon={<FaCode className="text-xl animate-pulse" />}
          label="Developer"
          path="/dev"
        />
        <RoleBtn
          icon={<FaUserSecret className="text-xl animate-pulse" />}
          label="Stalker"
          path="/stalker"
        />
      </div>
    </div>
  );
}
