import React from 'react';// Import custom CSS for Card4 styles
import '../styles/Cardservice.css'; // Import custom CSS for Card4 styles

const Card4 = ({ title, description }) => {
  return (
    <div className="card-container3">
      <div className="card-content3">
        <h3 className="card-title3">{title}</h3>
        <p className="card-description3">{description}</p>
      </div>
    </div>
  );
};

export default Card4;
