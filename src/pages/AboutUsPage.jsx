import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card3 from '../components/Card3'; // Import the Card component
import '../styles/Aboutus.css'; // Import the CSS file for styling
import profileimg from '../assets/profile.jpg'; // Import the profile image

const AboutUsPage = () => {
  const [hoveredCardContent, setHoveredCardContent] = useState(null);

  const handleHover = (content) => {
    setHoveredCardContent(content);
  };

  const handleHoverExit = () => {
    setHoveredCardContent(null);
  };

  return (
    <div className="about-us-page">
      <Navbar isHomePage={false} />
      <div className="about-us-details">
        <h2>About Study MBBS in Russia</h2>
        <p>
          Welcome to Study MBBS in Russia, a unit of Orinova Edutech Pvt Ltd. We are dedicated to guiding aspiring medical students towards bright and successful careers by providing them with the right resources and support to pursue their MBBS education in Russia.
        </p>
        <h2>Our Mission</h2>
        <p>
          At Study MBBS in Russia, our mission is simple: to help students interested in pursuing MBBS degrees abroad find the path to their dream careers without compromising on quality or integrity. We understand the unique challenges and opportunities that come with studying medicine in a foreign country, and we are committed to offering comprehensive guidance and assistance to students every step of the way.
        </p>
        <h2>Our Journey</h2>
        <p>
          In just a short span of time, we have assisted over 5000 students in realizing their aspirations of studying MBBS in Russia. Through our platform, these students have gained access to reputable medical universities in Russia, renowned for their high-quality education and globally recognized degrees. By facilitating their enrollment in these institutions, we have helped lay the foundation for successful medical careers for our students.
        </p>
        <h2>Core Values</h2>
        <p>
          Integrity, transparency, and openness are the cornerstones of our approach. We believe in building strong relationships with our students based on trust and mutual respect. Our commitment to excellence drives us to continually strive for the highest standards of service and support, ensuring that our students receive the best possible guidance and assistance throughout their academic journey in Russia.
        </p>
      </div>

      <div className="meet-founder">
      <h2>Meet Our Founder</h2>
      <div className="founder-info-container">
        <div className="founder-photo">
          <img src={profileimg} alt="Founder Photo" />
        </div>
        <p>
          Dr. Sourabh Kumar is the visionary behind Orinova Edutech Pvt Ltd. With a decade of experience in business, sales, and marketing, Dr. Kumar is a first-generation entrepreneur and innovator. His passion for education and dedication to helping students achieve their academic goals have propelled Study MBBS in Russia to become one of the most influential platforms in the field of MBBS education consultancy.
        </p>
      </div>
    </div>
    

      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="reason-cards flex flex-row">
          {/* Reason Cards */}
          <Card3
            title="Expert Counselling"
            content="Our team of experienced counsellors provides personalized guidance to help students achieve their academic goals."
            onHover={handleHover}
            onHoverExit={handleHoverExit}
          />
          <Card3
            title="Wide Network"
            content="We maintain a strong network of partner universities across the globe, ensuring that our students have access to the best education and training opportunities."
            onHover={handleHover}
            onHoverExit={handleHoverExit}
          />
          <Card3
            title="Hassle-Free Process"
            content="We provide end-to-end support for the admission process, from university selection to visa application and post-arrival support."
            onHover={handleHover}
            onHoverExit={handleHoverExit}
          />
          <Card3
            title="Competitive Pricing"
            content="We offer affordable services without compromising on quality, ensuring that our clients receive the best value for their investment."
            onHover={handleHover}
            onHoverExit={handleHoverExit}
          />
        </div>
        {hoveredCardContent && (
          <p className="card-content3 text-4xl">{hoveredCardContent}</p>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
