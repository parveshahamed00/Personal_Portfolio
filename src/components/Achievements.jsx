import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Achievements = ({ achievementsRef }) => {
  const certificates = [
    { id: 1, src: "/images/Ac1.jpg" },
    { id: 2, src: "/images/Ac2.jpg" },
    { id: 3, src: "/images/Ac3.jpg" },
    { id: 4, src: "/images/Ac4.jpg" },
    { id: 5, src: "/images/Ac5.jpg" },
    { id: 6, src: "/images/Ac6.jpg" },
    { id: 7, src: "/images/Ac7.jpg" },
    { id: 8, src: "/images/Ac8.jpg" },
    { id: 9, src: "/images/Ac9.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const goToPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const goToSlide = (index) => setCurrentIndex(index);

  // Image error handling
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src =
      "https://via.placeholder.com/800x600?text=Certificate+Not+Found";
  };

  // Open certificate image in new tab
  const openCertificate = (src) => {
    window.open(src, "_blank", "noopener,noreferrer");
  };

  return (
    <section ref={achievementsRef} className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#161179]">
          My Achievements
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Consistently recognized for creativity, dedication, and technical
          excellence through multiple web development competitions at inter and
          intra-college levels. These achievements reflect my passion for
          building modern web applications and my eagerness to continuously
          learn and improve.
        </p>
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert) => (
                <div key={cert.id} className="min-w-full flex justify-center">
                  <div
                    className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-md"
                    onClick={() => openCertificate(cert.src)}
                  >
                    <img
                      src={cert.src}
                      alt={`Certificate ${cert.id}`}
                      className="w-full h-80 object-cover"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-[#161179] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-[#161179] rounded-full p-3 hover:bg-gray-200 transition"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#161179] rounded-full p-3 hover:bg-gray-200 transition"
          >
            <FaArrowRight className="text-2xl" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#161179]" : "bg-gray-300"
                } hover:bg-[#161179] transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;