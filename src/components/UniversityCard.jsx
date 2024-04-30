import React from 'react';
import '../styles/UniversityCard.css'; // Import the CSS file for styling

const UniversityCard = ({ university }) => {
  const { universityName, location, program, tuitionFee, hostelFee, description, image, website } = university;

  return (
    <div className="university-card ">
      <h2 className="card-title text-2xl">{universityName}</h2>
      <div className="card-content">
        <img src={image} alt={universityName} className="university-image" />
        <div className="details-container">
          <p className="card-info"><strong>Location:</strong> {location}</p>
          <p className="card-info"><strong>Program:</strong> {program}</p>
          <p className="card-info"><strong>Tuition Fee:</strong> {tuitionFee}</p>
          <p className="card-info"><strong>Hostel Fee:</strong> {hostelFee}</p>
          <p className="card-description">{description}</p>
          <a href={website} target="_blank" rel="noopener noreferrer" className="university-link">Visit University Website</a>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
