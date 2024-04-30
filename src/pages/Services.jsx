import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import serviceImg from '../assets/services.png'; // Import the service image
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'University Selection Assistance'
    },
    {
      id: 2,
      title: 'Admission Guidance'
    },
    {
      id: 3,
      title: 'Visa Application Support'
    },
    {
      id: 4,
      title: 'Pre-Departure Assistance'
    },
    {
      id: 5,
      title: 'Post-Arrival Support'
    },
    {
      id: 6,
      title: 'Additional Services'
    },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className='mx-16 main'>
      <h3 className='head text-center mt-20 mb-10'>Explore Our Academic Offerings Chart Your Path to Success</h3>
      <p className='descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit. </p>

      <div className='services-container'>
        {services.map(service => (
          <motion.div
            key={service.id}
            className='service-card'
            ref={ref}
            initial={{ x: -100 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.1 }}
          >

            <div className='service-content'>
              <h4 className='service-title text-2xl'>{service.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
