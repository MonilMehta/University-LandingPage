// AboutUsPage.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import Card3 from '../components/Card3'; // Import the Card component
import '../styles/Aboutus.css'; // Import the CSS file for styling

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Navbar isHomePage={false} />
      <div className="about-us-details">
        <h2>About UniversalMBBS</h2>
        <p>
          Universalmbbs.com is a part of Orinova Edutech Private Limited.
          We have been in the education industry for more than 10 years, guiding and counseling students in various education streams like Engineering, Medical, Management, and courses in India and abroad.
          Our mission is to fulfill the aspirants' dreams of becoming successful doctors who serve society. We provide valuable guidance and support for students to study in India or abroad with peace of mind.
        </p>
      </div>
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="reason-cards flex flex-row">
          {/* Reason Cards */}
          {/* Card 1: Expert Counselling */}
          <Card3
            title="Expert Counselling"
            content="Our team of experienced counsellors provides personalized guidance to help students achieve their academic goals."
          />
          {/* Card 2: Wide Network */}
          <Card3
            title="Wide Network"
            content="We maintain a strong network of partner universities across the globe, ensuring that our students have access to the best education and training opportunities."
          />
          {/* Card 3: Hassle-Free Process */}
          <Card3
            title="Hassle-Free Process"
            content="We provide end-to-end support for the admission process, from university selection to visa application and post-arrival support."
          />
          {/* Card 4: Competitive Pricing */}
          <Card3
            title="Competitive Pricing"
            content="We offer affordable services without compromising on quality, ensuring that our clients receive the best value for their investment."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
