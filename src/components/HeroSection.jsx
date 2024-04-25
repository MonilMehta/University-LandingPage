
import React from 'react';

const HeroSection = () => {
    const handleInquireClick = () => {
        const inquireSection = document.getElementById('inquire');
        if (inquireSection) {
          window.scrollTo({
            top: inquireSection.offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
          });
        }
        };
  return (
    <div className="hero-section">
      {/* Hero Section */}
        <div className="hero-section flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-4xl font-bold mb-4">The first step towards career success</h1>
        <p className="text-white text-lg ml-1 mb-8 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button onClick={handleInquireClick} className="min-w-20 px-5 py-2 justify-center align-center text-center text-white bg-blue-600 mr-1 rounded-md lg:mt-0 lg:ml-0 button">         
        Inquire
        </button>
        </div>
    </div>
  );
};

export default HeroSection;
