import { FaUserTie, FaCode, FaUserSecret } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center text-white px-4 w-full">
      {/* Headings */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center w-full">
        Welcome the world of <span className="text-blue-500">{"<PA/>"}</span> Parvesh Ahamed
        </h1>
      <h2 className="text-xl md:text-2xl text-gray-300 mb-8 text-center w-full">
        Explore Based on Your Role
      </h2>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-screen-sm">
        <RoleButton
          icon={<FaUserTie className="text-xl animate-bounce" />}
          label="HR / Recruiter"
          path="/hr"
        />
        <RoleButton
          icon={<FaCode className="text-xl animate-pulse" />}
          label="Developer"
          path="/dev"
        />
        <RoleButton
          icon={<FaUserSecret className="text-xl animate-spin-slow" />}
          label="Stalker"
          path="/stalker"
        />
      </div>
    </div>
  );
}

function RoleButton({ icon, label, path }) {
  return (
    <a
      href={path}
      className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition rounded-lg border border-white shadow-md hover:shadow-blue-500/40 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 hover:scale-105 duration-300"
    >
      <span className="mr-2">{icon}</span>
      {label}
      <span className="absolute inset-0 opacity-20 blur-xl rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:opacity-40 transition duration-300"></span>
    </a>
  );
}
