import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/backgroundimage.png';

const Navbar = () => {
  const navigation = ["Home", "About Us", "Universities", "Services", "Gallery", "News & Notification", "Contact Us"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar relative" style={{ width: '100vw', backgroundRepeat: 'no-repeat' }}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(50%)', backdropFilter: 'blur(30px)', zIndex: -1 }}></div>
      {/* Navigation */}
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mr-0 lg:justify-between xl:px-0">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-4xl font-medium text-white mt-2">
          <Link to="/">
            <span className='px-10 text-white'>UniversalMBBS</span>
          </Link>
        </div>
        {/* Toggle Button for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3" key={index}>
                <Link to="/" className="py-2 text-lg font-normal text-white no-underline rounded-md focus:outline-none">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row">
          <Link to="/#inquire" className="min-w-20 px-5 py-2 justify-center align-center text-center text-white bg-blue-600 mr-1 rounded-md lg:mt-0 lg:ml-0 button">         
            Inquire
          </Link>
          <Link to="/" className="min-w-30 px-6 py-2 justify-center align-center text-center text-white bg-blue-600 mr-9 rounded-md lg:mt-0 lg:ml-1 button">         
            Login
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="hero-section flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-4xl font-bold mb-4">Your Slogan Goes Here</h1>
        <p className="text-white text-lg ml-1 mb-8 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to="/#inquire" className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out">Inquire Now</Link>
      </div>
    </div>
  );
};

export default Navbar;
