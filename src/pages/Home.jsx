import { FaUserTie, FaCode, FaUserSecret } from "react-icons/fa";
import RoleBtn from "../components/RoleBtn";
import TypewriterText from "../components/TypewriterText";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center text-white px-4 w-full">
      {/* Headings */}
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-snug">
        <span>Hi,</span> <br></br> I’m{" "}
        <span className="text-blue-500">Parvesh Ahamed</span>
        <br />
      </h1>
      <TypewriterText></TypewriterText>

      <h6 className="text-xs mt-8 text-gray-500 mb-4 text-center w-full">
        Explore Based on Your Role
      </h6>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-screen-sm">
        <Link to="/hr">
          <RoleBtn
            icon={<FaUserTie className="text-xl animate-pulse" />}
            label="HR / Recruiter"
          />
        </Link>
        <Link to="/developer">
          <RoleBtn
            icon={<FaCode className="text-xl animate-pulse" />}
            label="Developer"
          />
        </Link>
        <Link to="stalker">
          <RoleBtn
            icon={<FaUserSecret className="text-xl animate-pulse" />}
            label="Stalker"
          />
        </Link>
      </div>
    </div>
  );
}
