import React from 'react';
import UniversityCard from '../components/UniversityCard'; // Import the UniversityCard component
import universitiesData from '../assets/russia-uni.json'; // Import the JSON data

const UniversitiesPage = () => {
  return (
    <div className="universities-page">
      <h1>Top 10 Colleges in Russia to Study MBBS</h1>
      <div className="university-list">
        {universitiesData.map((university, index) => (
          <UniversityCard key={index} university={university} />
        ))}
      </div>
    </div>
  );
};

export default UniversitiesPage;
