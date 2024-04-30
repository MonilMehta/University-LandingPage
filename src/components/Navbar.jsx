import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card3.css';

const Navbar = ({ isHomePage }) => {
  const navigation = ["Home", "About Us", "Universities", "Services", "Gallery", "Privacy Policy", "Refund Policy"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUniversityDropdown = () => {
    setShowUniversityDropdown(!showUniversityDropdown);
  };

  const handleInquireClick = () => {
    const inquireSection = document.getElementById('inquire');
    if (inquireSection) {
      window.scrollTo({
        top: inquireSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`navbar relative  ${isHomePage ? 'text-white' : 'bluetext'}`} style={{ width: '100vw', backgroundRepeat: 'no-repeat', color: isHomePage ? 'white' : '#0540F2' }}>
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mr-0 lg:justify-between xl:px-0">
        <div className="flex items-center space-x-2 text-4xl font-medium text-white mt-2">
          <Link to="/">
            <span style={{ color: isHomePage ? 'white' : '#0540F2' }}>UniversalMBBS</span>
          </Link>
        </div>
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
                {menu === "Universities" ? (
                  <div className="relative">
                    <span onClick={toggleUniversityDropdown} className="py-2 text-lg font-normal no-underline rounded-md focus:outline-none cursor-pointer">
                      {menu}
                    </span>
                    {showUniversityDropdown && (
                      <ul className="absolute z-10 mt-2 py-2 px-4 bg-white border rounded-md shadow-lg w-60 unilist">
                        <li style={{color:'#0540F2'}}><Link to="/universities/russia">Universities in Russia</Link></li>
                        <li style={{color:'#0540F2'}}><Link to="/universities/ukraine">Universities in Ukraine</Link></li>
                        <li style={{color:'#0540F2'}}><Link to="/universities/turkey">Universities in Turkey</Link></li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link to={`/${menu.toLowerCase().replace(/\s+/g, '-')}`} className="py-2 text-lg font-normal no-underline rounded-md focus:outline-none">
                    {menu}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row">
          {isHomePage && <button onClick={handleInquireClick} className="min-w-20 px-5 py-2 justify-center align-center text-center text-white bg-blue-600 mr-1 rounded-md lg:mt-0 lg:ml-0 button">         
            Inquire
          </button>}
          <Link to="/login" className="min-w-30 px-6 py-2 justify-center align-center text-center text-white bg-blue-600 mr-9 rounded-md lg:mt-0 lg:ml-1 button">         
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
