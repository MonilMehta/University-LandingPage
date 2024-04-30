import React from 'react';
import Card4 from '../components/Cardservice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const servicesData = [
    {
      title: 'University Selection Assistance',
      description: 'Choosing the right university is crucial for your academic success. Our experienced counselors will help you explore your options and find the university that best fits your academic goals, budget, and personal preferences.'
    },
    {
      title: 'Admission Guidance',
      description: 'We\'ll guide you through the entire admission process, from filling out application forms to preparing for entrance exams (if required). Our goal is to ensure that you feel confident and well-prepared as you apply for admission to your chosen university.'
    },
    {
      title: 'Visa Application Support',
      description: 'Our visa experts will assist you in completing the necessary documentation, preparing for interviews (if needed), and ensuring that you meet all the requirements for a successful visa application. We\'ll make the visa application process as smooth and hassle-free as possible for you.'
    },
    {
      title: 'Pre-Departure Assistance',
      description: 'Before you head to Russia, we\'ll provide you with all the information and support you need to transition smoothly. From arranging accommodation to helping you understand local customs and culture, we\'ll ensure that you feel prepared for life as a student in Russia.'
    },
    {
      title: 'Post-Arrival Support',
      description: 'Once you arrive in Russia, our support continues. Whether you\'re facing academic challenges, need help with accommodation arrangements, or simply adjusting to life in a new country, our team will be there to assist you every step of the way.'
    },
    {
      title: 'Additional Services',
      description: 'In addition to our core services, we offer a range of additional support options to enhance your overall experience. This may include language courses, cultural orientation programs, and opportunities to connect with fellow students and alumni.'
    }
  ];

  return (
    <div>
    <Navbar isHomePage={false} />
    <div className="container mx-auto py-8">
      <h2 className="text-5xl font-bold text-center mt-10 mb-20 text-blue-600">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ml-10 mr-10">
        {servicesData.map((service, index) => (
          <Card4 key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Services;
