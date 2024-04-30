import React from 'react';
import UniversityCard from '../components/UniversityCard'; // Import the UniversityCard component
import universitiesData from '../assets/russia-uni.json'; // Import the JSON data
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UniversitiesPage = () => {
  return (
    <div className="universities-page">
      <Navbar isHomePage={false} />
      <h1
        className="heading"
        style={{
          fontSize: '36px',
          color: '#0540F2',
          textAlign: 'center',
          margin: '50px 0', // 50px margin above and below the heading
        }}
      >
        Top 10 Colleges in Russia to Study MBBS
      </h1>
      <div className="university-list">
        {universitiesData.map((university, index) => (
          <UniversityCard key={index} university={university} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default UniversitiesPage;
