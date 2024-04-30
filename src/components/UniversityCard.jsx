import React from 'react';
import '../styles/UniversityCard.css'; // Import the CSS file for styling

const UniversityCard = ({ university }) => {
  const { universityName, location, program, tuitionFee, hostelFee, description } = university;

  return (
    <div className="university-card">
      <h2 className="card-title">{universityName}</h2>
      <img src="" alt='University image' className="card-image" /> {/* Add the image source */}
      <p className="card-info"><strong>Location:</strong> {location}</p>
      <p className="card-info"><strong>Program:</strong> {program}</p>
      <p className="card-info"><strong>Tuition Fee:</strong> {tuitionFee}</p>
      <p className="card-info"><strong>Hostel Fee:</strong> {hostelFee}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default UniversityCard;
