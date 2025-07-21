import React from "react";
import Navbar from "../components/Navbar";
import { FaDownload } from "react-icons/fa";

function Hr() {
  const downloadAndOpenFile = () => {
    const fileUrl = "/WebDeveloper_Parvesh.pdf"; // Adjust the path as necessary

    // Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "WebDeveloper_Parvesh.pdf"; // Specify the filename here
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Open the file in a new tab
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar
        navLogoColor="text-white"
        bgColor="bg-[#161179]"
        textColor="text-gray-400"
        textHover="hover:text-white"
        btnBgColor="bg-white"
        btnTextColor="text-blue-600"
        btnHoverColor="hover:bg-blue-700 hover:text-white"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between min-h-[90vh]">
        <div className="flex justify-center m-0 sm:order-2">
          <img
            src="/images/profilPic-Hr.png"
            alt="Profile"
            className="sm:w-72 w-60 object-cover rounded-full shadow-2xl"
          />
        </div>
        <div className="text-center max-w-xl mx-auto sm:order-1">
          <h1
            style={{ lineHeight: "1.3" }}
            className="text-4xl md:text-5xl font-bold"
          >
            I am <span className="text-[#161179]">Parvesh Ahamed</span> thank
            you for visiting my profile
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
    </div>
  );
}

export default Hr;
