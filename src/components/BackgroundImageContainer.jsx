import React from 'react';
import backgroundImage from '../assets/backgroundimage.png'; // Import the background image

const BackgroundImageContainer = ({ children }) => {
  return (
    <div>
    <div className="absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(50%)', backdropFilter: 'blur(30px)', zIndex: -1 }}></div>
      {children}
    </div>
  );
};

export default BackgroundImageContainer;
